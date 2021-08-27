import React, { useEffect, useState, useContext } from "react";

import Button from "../Button/Button";
import CodeEditor from "../CodeEditor/CodeEditor";
import {
  checkFontSize,
  checkFontSizeRelative,
} from "../CodeChecker/CodeChecker";
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
  setFontSizeInParent: Function;
  setRelativeInParent: Function;
};

const FontSizeChecker = ({
  setFontSizeInParent,
  setRelativeInParent,
}: FontSizeLevelProps) => {
  const context = useContext(Context);
  const [code, setCode] = useState<Code>(new Code([""], [""]));
  const [valid, setValid] = useState<boolean>(false);
  const [fontSize, setFontSize] = useState<number>(0);
  const [fontSizeRelative, setFontSizeRelative] = useState<boolean>(false);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [points, setPoints] = useState<number>(0);

  const setCodeFromChild = (code: Code) => {
    setCode(code);
  };

  useEffect(
    function () {
      let fontSize = checkFontSize(code);
      let fontSizeRelative = checkFontSizeRelative(code);
      setFontSize(fontSize);
      setFontSizeRelative(fontSizeRelative);

      if (fontSize >= 16 || fontSizeRelative) {
        setValid(true);
      } else {
        setValid(false);
      }
    },
    [code]
  );

  useEffect(
    function () {
      let newVal: number;

      newVal =
        fontSize > 18 && fontSizeRelative
          ? 3
          : fontSize >= 16 && fontSizeRelative
          ? 2
          : 1;

      setPoints(newVal);
      setFontSizeInParent(fontSize);
    },
    [fontSize, setFontSizeInParent, fontSizeRelative]
  );

  useEffect(
    function () {
      let newVal: number;

      newVal =
        fontSize > 18 && fontSizeRelative
          ? 3
          : fontSize >= 16 && fontSizeRelative
          ? 2
          : 1;

      setPoints(newVal);
      setRelativeInParent(fontSizeRelative);
    },
    [fontSizeRelative, setRelativeInParent, fontSize]
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

    submitAgain = context.submittedLevel.has(2);

    if (!submitAgain) {
      context.addSubmittedLevel(2, points);
    } else {
      const testOldPoints = context.submittedLevel.get(2);
      if (testOldPoints) {
        oldPoints = testOldPoints;
      }
      context.submittedLevel.set(2, points);
    }

    const newPoints: number = points - oldPoints;
    context.addPoints(newPoints);
  };

  return (
    <LevelStyles valid={valid}>
      <CodeEditor
        level={"fontsize"}
        toggleSwitchLabel={"Blur"}
        setCode={setCodeFromChild}
        initialHTML={
          '<div>\n  <h1 class="hello">Hello World</h1> \n  <p>\n    If you can read this text, \n    people with low eyesight may be able to read it too \n  </p>\n</div>'
        }
        initialCSS={
          "h1.hello { \n  font-size: 12px; \n}\n div { \n padding: 50px; \n font-size: 10px;  \n }"
        }
      />
      <div className="col-12 row">
        <div className="col-3">
          <Button secondary={true} target={"/personas/dave"}>
            <Image src={arrowLeftDark} alt="arrow-left-icon" />
            Dave Overview
          </Button>
        </div>
        <div className="col-6">
          <p> </p>
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
              <h3>You have succeded the Font-Size Level with</h3>
              <Points currVal={points} maxVal={3} />
              {fontSize < 18 || fontSizeRelative == false ? (
                <p>Try Again to get all points or try the next level!</p>
              ) : null}
            </div>
            <div className={"col-6"}>
              <Progress
                //TODO: max points, current Points etc.
                val={points}
                maxval={3}
                label={"Contrast Ratio"}
              />
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
