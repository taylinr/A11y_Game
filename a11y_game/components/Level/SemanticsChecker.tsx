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
  checkSemanticsValid,
  getSemanticsPoints,
} from "../Checker/FormChecker";

type Props = {
  setValidInParent: Function;
};

const SemanticsChecker = ({ setValidInParent }: Props) => {
  const context = useContext(Context);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [valid, setValid] = useState<boolean>(false);
  const [points, setPoints] = useState<number>(0);

  const setFormInParent = (form: HTMLFormElement) => {
    setValid(checkSemanticsValid(form));
    setPoints(getSemanticsPoints(form) / 2);
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

    let id = eventTarget.name;

    for (let i = 0; i < childs.length; i++) {
      if (childs[i].selected) {
        htmlSnippet = childs[i];
      }
    }

    if (htmlSnippet != undefined) {
      const newHTMLSnippet = htmlSnippet.value;

      const htmlObject: HTMLElement = parse(HTML);

      const button = htmlObject.querySelector("#" + id);

      if (button) {
        if (button.innerHTML.includes("span")) {
          button.childNodes.forEach((child) => {
            if (child.toString().includes("span")) {
              let newChild = child as HTMLElement;

              newChild.innerHTML = newHTMLSnippet;
            }
          });
        } else {
          button.innerHTML =
            "<span>" + newHTMLSnippet + "<span>" + button.innerHTML;
        }
      }

      newHTML = htmlObject.toString();
    }

    return newHTML;
  };

  const addPoints = () => {
    let submitAgain: boolean = false;
    let oldPoints: number = 0;
    let thisPoints: number = points;

    submitAgain = context.submittedLevel.has(7);

    if (!submitAgain) {
      context.addSubmittedLevel(7, thisPoints);
    } else {
      const testOldPoints = context.submittedLevel.get(7);
      if (testOldPoints) {
        oldPoints = testOldPoints;
      }
      context.submittedLevel.set(7, thisPoints);
    }

    const newPoints: number = thisPoints - oldPoints;
    context.addPoints(newPoints);
  };

  return (
    <LevelStyles valid={valid}>
      <FormEditor
        getNewHTML={getNewHTML}
        setFormInParent={setFormInParent}
        level="semantics"
        toggle={false}
        initialCSS="
        body {
          display: flex;
          align-items: center;
          flex-direction: row;
          justify-content: center;
          
        }
        button {
          background-color: #3b6b76;
          border: none;
          color: white;
          box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
          cursor: pointer;
          border-radius: 15px;
          justify-content: space-between;
          align-items: center;
          display: flex;
          padding: 15px;
          margin: 5px;
        }
        
        span {
          margin-right: 10px;
        }"
        initialHTML="<button id='wallet'><svg fill='white' width='20px' height='20px' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path d='M0 4c0-1.1.9-2 2-2h15a1 1 0 0 1 1 1v1H2v1h17a1 1 0 0 1 1 1v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm16.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z'/></svg></button><button id='microphone'><svg fill='white' width='20px' height='20px' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path d='M15.75 8l-3.74-3.75a3.99 3.99 0 0 1 6.82-3.08A4 4 0 0 1 15.75 8zM1.85 15.3l9.2-9.19 2.83 2.83-9.2 9.2-2.82-2.84zm-1.4 2.83l2.11-2.12 1.42 1.42-2.12 2.12-1.42-1.42zM10 15l2-2v7h-2v-5z'/></svg></button><button id='addTab'><svg fill='white' width='20px' height='20px' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path d='M9 10V8h2v2h2v2h-2v2H9v-2H7v-2h2zM0 3c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3zm2 2v12h16V5H2z'/></svg></button><button id='anchor'><svg fill='white' width='20px' height='20px' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path d='M4.34 15.66A7.97 7.97 0 0 0 9 17.94V10H5V8h4V5.83a3 3 0 1 1 2 0V8h4v2h-4v7.94a7.97 7.97 0 0 0 4.66-2.28l-1.42-1.42h5.66l-2.83 2.83a10 10 0 0 1-14.14 0L.1 14.24h5.66l-1.42 1.42zM10 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z'/></svg></button>"
        formProps={[
          {
            formFields: [
              {
                options: [
                  {
                    name: "Icons might be hard to understand",
                    value: "Icons might be hard to understand",
                  },
                  {
                    name: "Icons can have multiple meanings",
                    value: "Icons can have multiple meanings",
                  },
                  {
                    name: "Images must be bigger",
                    value: "Images must be bigger",
                  },
                ],
                placeholder: "select answer",
                component: "select",
                name: "meanings",
                error: "error",
                textBefore: "What might be inaccessible here?",
                textAfter: "",
              },
              {
                options: [
                  {
                    name: "Add descriptive labels",
                    value: "Add descriptive labels",
                  },
                  {
                    name: "Resize Images",
                    value: "Resize Images",
                  },
                  {
                    name: "Use better Icons",
                    value: "Use better Icons",
                  },
                ],
                placeholder: "select answer",
                component: "select",
                name: "descriptions",
                error: "error",
                textBefore: "How could this be fixed?",
                textAfter: "",
              },
              {
                options: [
                  {
                    name: "E-Wallet",
                    value: "E-Wallet",
                  },
                  {
                    name: "Your Purse",
                    value: "Your Purse",
                  },
                  {
                    name: "Folders",
                    value: "Folders",
                  },
                ],
                placeholder: "select answer",
                component: "select",
                name: "wallet",
                error: "error",
                textBefore: "Select the best button names:",
                textAfter: "",
              },
              {
                options: [
                  {
                    name: "Lollipop",
                    value: "Lollipop",
                  },
                  {
                    name: "Rocket",
                    value: "Rocket",
                  },
                  {
                    name: "Voice Recording",
                    value: "Voice Recording",
                  },
                ],
                placeholder: "select answer",
                component: "select",
                name: "microphone",
                error: "error",
                textBefore: "",
                textAfter: "",
              },
              {
                options: [
                  {
                    name: "Medicine",
                    value: "Medicine",
                  },
                  {
                    name: "Add Tab",
                    value: "Add Tab",
                  },
                  {
                    name: "Church",
                    value: "Church",
                  },
                ],
                placeholder: "select answer",
                component: "select",
                name: "addTab",
                error: "error",
                textBefore: "",
                textAfter: "",
              },
              {
                options: [
                  {
                    name: "Add Webanchor",
                    value: "Add Webanchor",
                  },
                  {
                    name: "Save Page",
                    value: "Save Page",
                  },
                  {
                    name: "Lock",
                    value: "Lock",
                  },
                ],
                placeholder: "select answer",
                component: "select",
                name: "anchor",
                error: "error",
                textBefore: "",
                textAfter: "",
              },
            ],
            propSuccess: false,
            cta: "",
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
              <Points currVal={points} maxVal={3} />
            </div>
            <div className={"col-6"}>
              <Progress val={points} maxval={3} label={"Semantics"} />
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

export default SemanticsChecker;
