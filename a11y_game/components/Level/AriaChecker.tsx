import React, { useEffect, useState, useContext } from "react";
import Button from "../Button/Button";
import CodeEditor from "../CodeEditor/CodeEditor";
import { checkAriaValid, checkAriaPoints } from "../Checker/CodeChecker";
import LevelStyles from "./LevelStyles";
import { Code } from "../../model/code.model";
import Modal from "../Modal/Modal";
import Progress from "../ProgressBar/ProgressBar";
import Points from "../Points/Points";
import Context from "../Context/Context";
import arrowRight from "../../assets/arrow-right.svg";
import arrowLeftDark from "../../assets/arrow-left-dark.svg";
import Image from "next/image";

type AriaLevelProps = {
  setValidInParent: Function;
  setPointsInParent: Function;
};

const AriaChecker = ({
  setValidInParent,
  setPointsInParent,
}: AriaLevelProps) => {
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
      let nowValid = checkAriaValid(code);
      let currPoints = checkAriaPoints(code);

      //max possible points = 5
      //  3 = 1p -> madatory points for valid
      //  4 = 2p
      //  5 = 3p
      setValid(nowValid);
      setPoints(currPoints - 2);
    },
    [code]
  );

  useEffect(() => {
    setPointsInParent(points);
  }, [points]);

  useEffect(() => {
    setValidInParent(valid);
  }, [valid]);

  const activateModal = () => {
    setIsOpenModal(true);
  };

  const handleClose = () => {
    setIsOpenModal(false);
  };

  const addPoints = () => {
    let submitAgain: boolean = false;
    let oldPoints: number = 0;

    submitAgain = context.submittedLevel.has(4);

    if (!submitAgain) {
      context.addSubmittedLevel(4, points);
    } else {
      const testOldPoints = context.submittedLevel.get(4);
      if (testOldPoints) {
        oldPoints = testOldPoints;
      }
      context.submittedLevel.set(4, points);
    }

    const newPoints: number = points - oldPoints;
    context.addPoints(newPoints);
  };

  return (
    <LevelStyles valid={valid}>
      <CodeEditor
        level={"aria"}
        toggleSwitchLabel={"Text"}
        setCode={setCodeFromChild}
        initialHTML={
          "<div class='tab'>\n  <button class='tablinks active' id='london'>\n  London\n  </button>\n  <button class='tablinks' id='paris'>\n  Paris\n  </button>\n  <button class='tablinks' id='tokyo'>\n  Tokyo\n  </button>\n</div>\n <!-- Tab content -->\n<div id='London' class='tabcontent active'>\n  <h3>London</h3>\n  <p>London is the capital city of England.</p></div>\n<div id='Paris' class='tabcontent'>\n  <h3>Paris</h3>\n  <p>Paris is the capital of France.</p>\n</div>\n<div id='Tokyo' class='tabcontent'>\n<h3>Tokyo</h3>\n  <p>Tokyo is the capital of Japan.</p>\n</div>"
        }
        initialCSS={
          "/* Style the tab */\n.tab {\n  overflow: hidden;  border: 1px solid #ccc;\n  background-color: #f1f1f1;\n}\n/* Style the buttons that are used to open the tab content */\n.tab button {\n  background-color: inherit;  float: left;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  padding: 14px 16px;\n  transition: 0.3s;\n}\n/* Change background color of buttons on hover */\n .tab button:hover {\n  background-color: #ddd;\n}\n /* Create an active/current tablink class */\n .tab button.active {\n  background-color: #ccc;\n}\n /* Style the tab content */\n .tabcontent {\n  display: none;\n  padding: 6px 12px;\n  border: 1px solid #ccc;\n  border-top: none;\n}\n .tabcontent.active {\n  display: block;\n}"
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
          titleText="Ara Level Evaluation"
          id={"aria"}
          handleClose={handleClose}
        >
          <div className={"col-12 row"}>
            <h2>Great!</h2>
            <div className={"col-6"}>
              <h3>You have succeded the Aria Level with</h3>
              <Points currVal={points} maxVal={3} />
              {points < 3 ? (
                <p>Try Again to get all points or try the next level!</p>
              ) : null}
            </div>
            <div className={"col-6"}>
              <Progress val={points} maxval={3} label={"Aria"} />
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

export default AriaChecker;
