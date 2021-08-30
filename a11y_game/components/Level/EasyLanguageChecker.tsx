import { useContext, useEffect, useState } from "react";
import FormEditor from "../FormEditor/FormEditor";
import LevelStyles from "./LevelStyles";
import Modal from "../Modal/Modal";
import Progress from "../ProgressBar/ProgressBar";
import Points from "../Points/Points";
import Context from "../Context/Context";
import arrowRight from "../../assets/arrow-right.svg";
import arrowLeftDark from "../../assets/arrow-left-dark.svg";
import Image from "next/image";
import Button from "../Button/Button";
import { parse, HTMLElement, Node } from "node-html-parser";
import {
  checkEasyLanguageValid,
  getEasyLanguagePoints,
} from "../Checker/FormChecker";

type Props = {
  setValidInParent: Function;
};

const EasyLanguageChecker = ({ setValidInParent }: Props) => {
  const context = useContext(Context);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [valid, setValid] = useState<boolean>(false);
  const [points, setPoints] = useState<number>(0);

  const setFormInParent = (form: HTMLFormElement) => {
    setValid(checkEasyLanguageValid(form));
    setPoints(getEasyLanguagePoints(form));
  };

  useEffect(() => {
    setValidInParent(valid);
  }, [valid, setValidInParent]);

  const activateModal = () => {
    setIsOpenModal(true);
  };

  const handleClose = () => {
    setIsOpenModal(false);
  };

  const getNewHTML = (eventTarget: HTMLSelectElement, HTML: string) => {
    let childs = eventTarget.options;
    let htmlSnippet;
    let newHTML = HTML;

    for (let i = 0; i < childs.length; i++) {
      if (childs[i].selected) {
        htmlSnippet = childs[i];
      }
    }

    if (htmlSnippet != undefined) {
      const newHTMLSnippet = htmlSnippet.value;

      const index = htmlSnippet.index;
      const id: string = eventTarget.id;

      const htmlObject: HTMLElement = parse(HTML);

      const span = htmlObject.querySelector("#" + id);
      const dataVal = "" + span.getAttribute("data-val");

      const valid = parseInt(dataVal) == index;

      span.innerHTML = newHTMLSnippet;

      if (valid && span.classList.contains("blurred")) {
        span.classList.remove("blurred");
      } else if (!valid && !span.classList.contains("blurred")) {
        span.classList.add("blurred");
      }

      newHTML = htmlObject.toString();
    }

    return newHTML;
  };

  const addPoints = () => {
    let submitAgain: boolean = false;
    let oldPoints: number = 0;
    let thisPoints: number = points > 14 ? 3 : points > 12 ? 2 : 1;

    submitAgain = context.submittedLevel.has(8);

    if (!submitAgain) {
      context.addSubmittedLevel(8, thisPoints);
    } else {
      const testOldPoints = context.submittedLevel.get(8);
      if (testOldPoints) {
        oldPoints = testOldPoints;
      }
      context.submittedLevel.set(8, thisPoints);
    }

    const newPoints: number = thisPoints - oldPoints;
    context.addPoints(newPoints);
  };

  return (
    <LevelStyles valid={valid}>
      <FormEditor
        getNewHTML={getNewHTML}
        setFormInParent={setFormInParent}
        level="2"
        toggle={false}
        initialCSS="div { padding: 30px; } h3 { font-size: 1.5em; } p { font-size: 1.2em;} span { font-weight: bold;} .blurred { filter: blur(2px); }"
        initialHTML="<div><h3> Complicated Text </h3><p>Thank you for your <span id='correspondence' class='blurred' data-val='2'>correspondence asking for permission</span> to put up <span id='placard' class='blurred' data-val='1'>advertisement placard</span> in the <span id='athenaeum' class='blurred' data-val='3'>athenaeum</span>. Before we can give you an <span id='confirmation' class='blurred' data-val='3'>confirmation</span> we will need to see a copy of the poster to make sure it won't <span id='aggrieve' class='blurred' data-val='1'>aggrieve</span> anyone.</p></div>"
        formProps={[
          {
            formFields: [
              {
                options: [
                  {
                    name: "permission correspondence",
                    value: "permission correspondence",
                  },
                  {
                    name: "letter",
                    value: "letter",
                  },
                  {
                    name: "asking for formal consent",
                    value: "asking for formal consent",
                  },
                ],
                placeholder: "correspondence asking for permission",
                component: "select",
                name: "correspondence",
                error: "error",
                textBefore: "Thank you for your",
                textAfter: "",
              },
              {
                options: [
                  {
                    name: "a poster",
                    value: "a poster",
                  },
                  {
                    name: "an announcement",
                    value: "an announcement",
                  },
                  {
                    name: "a public notice",
                    value: "a public notice",
                  },
                ],
                placeholder: "an advertisement placard",
                component: "select",
                name: "placard",
                error: "error",
                textBefore: "to put up ",
                textAfter: " ",
              },
              {
                options: [
                  {
                    name: "bibliotheca",
                    value: "bibliotheca",
                  },
                  {
                    name: "reference center",
                    value: "reference center",
                  },
                  {
                    name: "library",
                    value: "library",
                  },
                ],
                placeholder: "athenaeum",
                component: "select",
                name: "athenaeum",
                error: "error",
                textBefore: "in the ",
                textAfter: ".",
              },
              {
                options: [
                  {
                    name: "verificate",
                    value: "verificate",
                  },
                  {
                    name: "accept",
                    value: "accept",
                  },
                  {
                    name: "allow",
                    value: "allow",
                  },
                ],
                placeholder: "give you an confirmation",
                component: "select",
                name: "confirmation",
                error: "error",
                textBefore: "Before we can ",
                textAfter: "we will need to see a copy of the poster ",
              },
              {
                options: [
                  {
                    name: " upset ",
                    value: " upset ",
                  },
                  {
                    name: "disquiet",
                    value: "disquiet",
                  },
                  {
                    name: "turbulence",
                    value: "turbulence",
                  },
                ],
                placeholder: "aggrieve",
                component: "select",
                name: "aggrieve",
                error: "error",
                textBefore: "to make sure they won't ",
                textAfter: "anyone.",
              },
            ],
            propSuccess: false,
            cta: "SUBMIIITTTITITITIT",
            successHeadline: "success!",
            successText: "success headline!",
            onChange: function (e) {},
          },
        ]}
      />

      <div className="col-12 row">
        <div className="col-3">
          <Button secondary={true} target={"/personas/alex"}>
            <Image src={arrowLeftDark} alt="arrow-left-icon" />
            Alex Overview
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
          id={"easyLanguage"}
          handleClose={handleClose}
        >
          <div className={"col-12 row"}>
            <h2>Great!</h2>
            <div className={"col-6"}>
              <h3>You have succeded the Easy Language Level with</h3>
              <Points
                currVal={points > 14 ? 3 : points > 12 ? 2 : 1}
                maxVal={3}
              />
              {points < 15 ? (
                <p>Try Again to get all points or try the next level!</p>
              ) : null}
            </div>
            <div className={"col-6"}>
              <Progress val={points} maxval={15} label={"Easy Language"} />
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

export default EasyLanguageChecker;
