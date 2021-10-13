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
  checkScreenReaderValid,
  getScreenReaderPoints,
} from "../Checker/FormChecker";

type Props = {
  setValidInParent: Function;
};

const ScreenReaderChecker = ({ setValidInParent }: Props) => {
  const context = useContext(Context);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [valid, setValid] = useState<boolean>(false);
  const [points, setPoints] = useState<number>(0);

  const setFormInParent = (form: HTMLFormElement) => {
    setValid(checkScreenReaderValid(form));
    setPoints(getScreenReaderPoints(form));
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

  const getNewHTML = (eventTarget: HTMLElement, HTML: string) => {
    const id: string = eventTarget.id;
    const tagName: string = eventTarget.tagName;
    let newHTML = HTML;

    let textareaValue: string = "";

    if (tagName == "SELECT" && id == "select-alt-text") {
      const select: HTMLSelectElement =
        eventTarget as unknown as HTMLSelectElement;

      let childs = select.options;
      let innerhtml = "";

      for (let i = 0; i < childs.length; i++) {
        if (childs[i].selected) {
          innerhtml = childs[i].value;
        }
      }

      const htmlObject: HTMLElement = parse(HTML);

      const image = htmlObject.querySelector("img");

      image.setAttribute("alt", innerhtml);

      newHTML = htmlObject.toString();
    } else if (tagName == "TEXTAREA") {
      const textarea: HTMLTextAreaElement =
        eventTarget as unknown as HTMLTextAreaElement;

      textareaValue = textarea.value;
    }

    if (textareaValue != "") {
      const htmlObject: HTMLElement = parse(HTML);

      const description = htmlObject.querySelector("#" + id);

      description.innerHTML = textareaValue;

      newHTML = htmlObject.toString();
    }

    return newHTML;
  };

  const addPoints = () => {
    let submitAgain: boolean = false;
    let oldPoints: number = 0;
    let thisPoints: number = points > 11 ? 3 : points > 9 ? 2 : 1;

    submitAgain = context.submittedLevel.has(3);

    if (!submitAgain) {
      context.addSubmittedLevel(3, thisPoints);
    } else {
      const testOldPoints = context.submittedLevel.get(3);
      if (testOldPoints) {
        oldPoints = testOldPoints;
      }
      context.submittedLevel.set(3, thisPoints);
    }

    const newPoints: number = thisPoints - oldPoints;
    context.addPoints(newPoints);
  };

  return (
    <LevelStyles valid={valid}>
      <FormEditor
        getNewHTML={getNewHTML}
        setFormInParent={setFormInParent}
        level="screenreader"
        toggleSwitchLabel="Text"
        toggle={true}
        initialCSS="
        
            .card {
                box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
                transition: 0.3s;
                width: 50%;
                border-radius: 5px;
                margin-left: auto;
                margin-right: auto;
                margin-top: 10%;
            }

            .card:hover {
                box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
            }

            img {
                width: 100%;
                border-radius: 5px 5px 0 0;
                max-height: 175px;
            }

            .container {
                padding: 2px 16px;
            }"
        initialHTML="<div class='card'><img src='/images/sunglasses.jpg' alt=' ' >
                            <div class='container'>
                                <p>Accessoires</p>
                                <h4><b>35$</b></h4>
                                <p id='description'>Perfect for this summer!</p>
                            </div>
                        </div>"
        formProps={[
          {
            formFields: [
              {
                options: [
                  {
                    name: "use better images",
                    value: "use better images",
                  },
                  {
                    name: "add alt text to image",
                    value: "add alt text to image",
                  },
                  {
                    name: "add colorful fonts",
                    value: "add colorful fonts",
                  },
                ],
                placeholder: "select your answer",
                component: "select",
                name: "alt-text",
                error: "error",
                textBefore:
                  "What could help to give screen reader users a better description of this product?",
                textAfter: "",
              },
              {
                options: [
                  {
                    name: "product descriptions",
                    value: "product descriptions",
                  },
                  {
                    name: "large icons",
                    value: "large icons",
                  },
                  {
                    name: "correct item order",
                    value: "correct item order",
                  },
                ],
                placeholder: "select your answer",
                component: "select",
                name: "descriptions",
                error: "error",
                textBefore: "What else could help?",
                textAfter: "",
              },
              {
                options: [
                  {
                    name: "person with blue nails and blouse holding sunglasses",
                    value:
                      "person with blue nails and blouse holding sunglasses",
                  },
                  {
                    name: "feminine person holding beige retro sunglasses",
                    value: "feminine person holding beige retro sunglasses",
                  },
                  {
                    name: "summer vibes",
                    value: "summer vibes",
                  },
                ],
                placeholder: "select your answer",
                component: "select",
                name: "select-alt-text",
                error: "error",
                textBefore:
                  "Switch the 'Text'-Toggle, what would be a good description for this product-image?",
                textAfter: "",
              },
              {
                placeholder: "type your answer here",
                component: "textarea",
                name: "description",
                error: "error",
                label:
                  "How about the description, if you can't see the product, what would you want to know?",
              },
            ],
            propSuccess: false,
            cta: "SUBMIIITTTITITITIT",
            successHeadline: "success!",
            successText: "success headline!",
            onChange: (e) => {},
          },
        ]}
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
          titleText="Screenreader Level Evaluation"
          id={"screenReader"}
          handleClose={handleClose}
        >
          <div className={"col-12 row"}>
            <h2>Great!</h2>
            <div className={"col-6"}>
              <h3>You have succeded the Screenreader Level with</h3>
              <Points
                currVal={points > 11 ? 3 : points > 9 ? 2 : 1}
                maxVal={3}
              />
              {points < 15 ? (
                <p>Try Again to get all points or try the next level!</p>
              ) : null}
            </div>
            <div className={"col-6"}>
              <Progress val={points} maxval={12} label={"Screenreader"} />
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

export default ScreenReaderChecker;
