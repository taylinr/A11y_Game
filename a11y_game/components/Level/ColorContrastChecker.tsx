import React, { useEffect, useState, useContext } from "react";

import Button from "../Button/Button";
import CodeEditor from "../CodeEditor/CodeEditor";
import { checkContrast } from "../CodeChecker/CodeChecker";
import LevelStyles from "./LevelStyles";
import { Code } from "../../model/code.model";
import Modal from "../Modal/Modal";
import Progress from "../ProgressBar/ProgressBar";
import Points from "../Points/Points";
import Context from "../Context/Context";
import arrowRight from "../../assets/arrow-right.svg";
import arrowLeft from "../../assets/arrow-left.svg";
import Image from "next/image";

type ColorContrastCheckerProps = {};

const ColorContrastChecker = () => {
  const context = useContext(Context);
  const [code, setCode] = useState<Code>(new Code([""], [""]));
  const [valid, setValid] = useState<boolean>(false);
  const [contrastRatio, setContrastratio] = useState<number>(0);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [points, setPoints] = useState<number>(0);

  const setCodeFromChild = (code: Code) => {
    setCode(code);
  };

  useEffect(
    function () {
      setContrastratio(checkContrast(code));

      if (checkContrast(code) > 5.0) {
        setValid(true);
      } else {
        setValid(false);
      }
    },
    [code]
  );

  useEffect(
    function () {
      var newVal: number;

      newVal = contrastRatio > 15 ? 3 : contrastRatio > 10 ? 2 : 1;

      setPoints(newVal);
    },
    [contrastRatio]
  );

  const activateModal = () => {
    setIsOpenModal(true);
  };

  const handleClose = () => {
    setIsOpenModal(false);
  };

  const addPoints = () => {
    var submitAgain: boolean = false;
    var oldPoints: number = 0;

    submitAgain = context.submittedLevel.has(1);

    if (!submitAgain) {
      context.addSubmittedLevel(1, points);
    } else {
      const testOldPoints = context.submittedLevel.get(1);
      if (testOldPoints) {
        oldPoints = testOldPoints;
      }
      context.submittedLevel.set(1, points);
    }

    const newPoints: number = points - oldPoints;
    context.addPoints(newPoints);
  };

  return (
    <LevelStyles valid={valid}>
      <CodeEditor
        level={"contrast"}
        toggleSwitchLabel={"Greyscale"}
        setCode={setCodeFromChild}
        initialHTML={
          '<div class="wrapper">\n  <h1 class="hello">Hello <strong>World</strong></h1> \n</div>\n<div>\n  <p> NOOO!!!</p>\n</div>'
        }
        initialCSS={
          "body { \n   background-color: red; \n } \n\n h1.hello { \n    color: blue; \n} \n\n strong{ text-decoration: underline;} \n\n p { color: green; } \n\n div { background-color: yellow; } \n\n .wrapper { background-color: green;}"
        }
      />
      <div className="col-12 row">
        <div className="col-3">
          <div className="col-3">
            <Button primary={true} target={"/personas/dave"}>
              <Image src={arrowLeft} alt="arrow-left-icon" />
              Dave Overview
            </Button>
          </div>
        </div>
        <div className="col-6">
          {valid ? (
            <p>Contrast Ratio is {contrastRatio?.toFixed(2)}</p>
          ) : (
            <p>Contrast Ratio is too small</p>
          )}
        </div>
        <div className="col-3">
          {valid ? (
            <Button primary={true} onClick={activateModal}>
              Submit
              <Image src={arrowRight} alt="arrow-right-icon" />
            </Button>
          ) : (
            <Button inactive={true}>Submit</Button>
          )}
        </div>
      </div>
      {isOpenModal ? (
        <Modal
          titleText="Color And Contrast Level Evaluation"
          id={"contrastRatio"}
          handleClose={handleClose}
        >
          <div className={"col-12 row"}>
            <h2>Great!</h2>
            <div className={"col-6"}>
              <h3>You have succeded the Color and Contrast Level with</h3>
              <Points currVal={points} maxVal={3} />
              {contrastRatio < 16 ? (
                <p>Try Again to get all points or try the next level!</p>
              ) : null}
            </div>
            <div className={"col-6"}>
              <Progress
                val={contrastRatio}
                maxval={21}
                label={"Contrast Ratio"}
              />
            </div>
            <div className={"col-12"}>
              <div className={"col-4"}>
                <Button secondary={true} onClick={handleClose}>
                  <Image src={arrowLeft} alt="arrow-left-icon" />
                  Try Again
                </Button>
              </div>
              <div className={"col-4"}>
                <p> </p>
              </div>
              <div className={"col-4"}>
                <Button primary={true} target={"./"} onClick={addPoints}>
                  Next Level
                  <Image src={arrowRight} alt="arrow-right-icon" />
                </Button>
              </div>
            </div>
          </div>
        </Modal>
      ) : null}
    </LevelStyles>
  );
};

export default ColorContrastChecker;
