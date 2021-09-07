import React, { useEffect, useState, useContext } from "react";
import Button from "../Button/Button";
import CodeEditor from "../CodeEditor/CodeEditor";
import { checkFontSize, checkFontSizeRelative } from "../Checker/CodeChecker";
import LevelStyles from "./LevelStyles";
import { Code } from "../../model/code.model";
import Modal from "../Modal/Modal";
import Progress from "../ProgressBar/ProgressBar";
import Points from "../Points/Points";
import Context from "../Context/Context";
import arrowRight from "../../assets/arrow-right.svg";
import arrowLeftDark from "../../assets/arrow-left-dark.svg";
import Image from "next/image";

type FontSizeLevelProps = {
  setValidInParent: Function;
};

const FontSizeChecker = ({ setValidInParent }: FontSizeLevelProps) => {
  const context = useContext(Context);
  const [code, setCode] = useState<Code>(new Code([""], [""]));
  const [valid, setValid] = useState<boolean>(false);

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [points, setPoints] = useState<number>(3);

  const setCodeFromChild = (code: Code) => {
    setCode(code);
  };

  useEffect(
    function () {
      // let fontSize = checkFontSize(code);
      // let fontSizeRelative = checkFontSizeRelative(code);
      // setFontSize(fontSize);
      // setFontSizeRelative(fontSizeRelative);
      // if (fontSize >= 16 || fontSizeRelative) {
      //   setValid(true);
      // } else {
      //   setValid(false);
      // }
    },
    [code]
  );

  const activateModal = () => {
    setIsOpenModal(true);
  };

  const handleClose = () => {
    setIsOpenModal(false);
  };

  const addPoints = () => {
    let submitAgain: boolean = false;
    let oldPoints: number = 0;

    submitAgain = context.submittedLevel.has(9);

    if (!submitAgain) {
      context.addSubmittedLevel(9, points);
    } else {
      const testOldPoints = context.submittedLevel.get(9);
      if (testOldPoints) {
        oldPoints = testOldPoints;
      }
      context.submittedLevel.set(9, points);
    }

    const newPoints: number = points - oldPoints;
    context.addPoints(newPoints);
  };

  return (
    <LevelStyles valid={valid}>
      <CodeEditor
        level={"keyboard"}
        setCode={setCodeFromChild}
        initialHTML={"<button id='submit'></button>"}
        initialCSS={
          "h1.hello { \n  font-size: 12px; \n}\n div { \n padding: 50px; \n font-size: 10px;  \n }"
        }
        iframeFunction={activateModal}
      />
      <div className="col-12 row">
        <div className="col-3">
          <Button secondary={true} target={"/personas/semiha"}>
            <Image src={arrowLeftDark} alt="arrow-left-icon" />
            Dave Overview
          </Button>
        </div>
        <div className="col-6">
          <p> </p>
        </div>
      </div>
      {isOpenModal ? (
        <Modal
          titleText="Keyboard Only Level Evaluation"
          id={"keyboard"}
          handleClose={handleClose}
        >
          <div className={"col-12 row"}>
            <h2>Great!</h2>
            <div className={"col-6"}>
              <h3>You have succeded the Keyboard only Level with</h3>
              <Points currVal={points} maxVal={3} />
            </div>
            <div className={"col-6"}>
              <Progress val={points} maxval={3} label={"Keyboard Only"} />
            </div>
            <div className={"col-12"}>
              <div className={"col-4"}>
                <Button secondary={true} onClick={handleClose}>
                  <Image src={arrowLeftDark} alt="arrow-left-icon" />
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

export default FontSizeChecker;
