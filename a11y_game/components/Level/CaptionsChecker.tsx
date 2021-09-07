import React, { useEffect, useState, useContext } from "react";
import Button from "../Button/Button";
import CodeEditor from "../CodeEditor/CodeEditor";
import {
  checkCaptionsValid,
  checkCaptionsPoints,
} from "../Checker/CodeChecker";
import LevelStyles from "./LevelStyles";
import { Code } from "../../model/code.model";
import Modal from "../Modal/Modal";
import Progress from "../ProgressBar/ProgressBar";
import Points from "../Points/Points";
import Context from "../Context/Context";
import arrowRight from "../../assets/arrow-right.svg";
import arrowLeftDark from "../../assets/arrow-left-dark.svg";
import Image from "next/image";

type CaptionsLevelProps = {
  setValidInParent: Function;
  setPointsInParent: Function;
};

const CaptionsChecker = ({
  setValidInParent,
  setPointsInParent,
}: CaptionsLevelProps) => {
  const context = useContext(Context);
  const [code, setCode] = useState<Code>(new Code([""], [""]));
  const [valid, setValid] = useState<boolean>(false);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [points, setPoints] = useState<number>(0);

  const setCodeFromChild = (code: Code) => {
    setCode(code);
  };

  useEffect(
    function () {
      setValid(checkCaptionsValid(code));
      setPoints(checkCaptionsPoints(code));
    },
    [code, setValid, setPoints]
  );

  useEffect(
    function () {
      setValidInParent(valid);
    },
    [valid, setValidInParent]
  );

  useEffect(
    function () {
      setPointsInParent(points);
    },
    [points, setPointsInParent]
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

    submitAgain = context.submittedLevel.has(5);

    if (!submitAgain) {
      context.addSubmittedLevel(5, points);
    } else {
      const testOldPoints = context.submittedLevel.get(5);
      if (testOldPoints) {
        oldPoints = testOldPoints;
      }
      context.submittedLevel.set(5, points);
    }

    const newPoints: number = points - oldPoints;
    context.addPoints(newPoints);
  };

  return (
    <LevelStyles valid={valid}>
      <CodeEditor
        level={"captions"}
        setCode={setCodeFromChild}
        initialHTML={
          "<h1>Video</h1>\n <video id='video' controls preload='metadata' muted>\n	<source src='/video/sintel-short.mp4' type='video/mp4'> \n	<source src='/video/sintel-short.webm' type='video/webm'> \n </video>\n\n<p>&copy; copyright Blender Foundation |\n  <a href='http://www.sintel.org'>www.sintel.org</a>\n</p>"
        }
        initialCSS={"video {max-width: 100%;}"}
      />

      {/* <track label='English' kind='subtitles' srclang='en' src='/video/sintel-en.vtt' default>\n */}
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
          titleText="Captions Level Evaluation"
          id={"captionsRatio"}
          handleClose={handleClose}
        >
          <div className={"col-12 row"}>
            <h2>Great!</h2>
            <div className={"col-6"}>
              <h3>You have succeded the Captions Level with</h3>
              <Points currVal={points} maxVal={3} />
            </div>
            <div className={"col-6"}>
              <Progress val={points} maxval={3} label={"Captions"} />
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

export default CaptionsChecker;
