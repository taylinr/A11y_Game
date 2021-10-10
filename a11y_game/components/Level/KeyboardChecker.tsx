import React, { useEffect, useState, useContext } from "react";
import Button from "../Button/Button";
import CodeEditor from "../CodeEditor/CodeEditor";
import { checkKeyboardPoints } from "../Checker/CodeChecker";
import LevelStyles from "./LevelStyles";
import { Code } from "../../model/code.model";
import Modal from "../Modal/Modal";
import Progress from "../ProgressBar/ProgressBar";
import Points from "../Points/Points";
import Context from "../Context/Context";
import arrowRight from "../../assets/arrow-right.svg";
import arrowLeftDark from "../../assets/arrow-left-dark.svg";
import Image from "next/image";
import { useRouter } from "next/router";
import Badge from "../Badge/Badge";

type FontSizeLevelProps = {
  setValidInParent: Function;
};

const FontSizeChecker = ({ setValidInParent }: FontSizeLevelProps) => {
  const context = useContext(Context);
  const [code, setCode] = useState<Code>(new Code([""], [""]));
  const [valid, setValid] = useState<boolean>(false);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [points, setPoints] = useState<number>(3);
  const [showBadge, setShowBadge] = useState<boolean>(false);
  const [badge, setBadge] = useState<number>(0);
  const router = useRouter();

  const setCodeFromChild = (code: Code) => {
    setCode(code);
  };

  useEffect(
    () => {
      let newPoints = checkKeyboardPoints(code);
      setPoints(newPoints);
      setValid(newPoints > 0);
    },
    [code, setPoints, setValid]
  );

  useEffect(
    () => {
      setValidInParent(valid);
    },
    [valid, setValidInParent]
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

  const animateBadge = () => {
    handleClose();
    addPoints();

    let badge = context.badges.get(4);
    if (badge) {
      setBadge(badge);
      setShowBadge(true);
    }
  };

  const handleCloseBadge = () => {
    router.push("./");
    setShowBadge(false);
  };

  return (
    <LevelStyles valid={valid}>
      <CodeEditor
        level={"keyboard"}
        setCode={setCodeFromChild}
        initialHTML={
          "<div class='button--submit' id='submit'>\n  Submit \n  <svg id='arrow-right' width='18' height='13' viewBox='0 0 18 13' fill='none' xmlns='http://www.w3.org/2000/svg'>\n    <path d='M4.37114e-07 7.5L14.17 7.5L10.59 11.09L12 12.5L18 6.5L12 0.499999L10.59 1.91L14.17 5.5L6.11959e-07 5.5L4.37114e-07 7.5Z' fill='#ffffff'/>\n  </svg>\n</div>"
        }
        showCSS={false}
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
               <Button primary={true} onClick={animateBadge}>
                  Next Level
                  <Image src={arrowRight} alt="arrow-right-icon" />
                </Button>
              </div>
            </div>
          </div>
        </Modal>
      ) : null}
      {showBadge ? (
        <Badge
          badge={badge}
          titleText={"Badge for Semiha"}
          id="badge-dave"
          handleClose={handleCloseBadge}
        />
      ) : null}
    </LevelStyles>
  );
};

export default FontSizeChecker;
