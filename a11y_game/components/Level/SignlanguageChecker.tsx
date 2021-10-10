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
import { useRouter } from "next/router";
import Badge from "../Badge/Badge";
import {
  checkSignlanguageValid,
  getSignlanguagePoints,
} from "../Checker/FormChecker";

type Props = {
  setValidInParent: Function;
};

const SignlanguageChecker = ({ setValidInParent }: Props) => {
  const context = useContext(Context);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [valid, setValid] = useState<boolean>(false);
  const [points, setPoints] = useState<number>(0);
  const [showBadge, setShowBadge] = useState<boolean>(false);
  const [badge, setBadge] = useState<number>(0);
  const router = useRouter();

  const setFormInParent = (form: HTMLFormElement) => {
    setValid(checkSignlanguageValid(form));
    setPoints(getSignlanguagePoints(form));
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

      const img = htmlObject.querySelector("#" + id);
      const dataVal = "" + img.getAttribute("data-val");

      const valid = parseInt(dataVal) == index;

      if (valid && img.classList.contains("blurred")) {
        img.classList.remove("blurred");
      } else if (!valid && !img.classList.contains("blurred")) {
        img.classList.add("blurred");
      }

      newHTML = htmlObject.toString();
    }

    return newHTML;
  };

  const addPoints = () => {
    let submitAgain: boolean = false;
    let oldPoints: number = 0;
    let thisPoints: number =  3;

    submitAgain = context.submittedLevel.has(6);

    if (!submitAgain) {
      context.addSubmittedLevel(6, thisPoints);
    } else {
      const testOldPoints = context.submittedLevel.get(6);
      if (testOldPoints) {
        oldPoints = testOldPoints;
      }
      context.submittedLevel.set(6, thisPoints);
    }

    const newPoints: number = thisPoints - oldPoints;
    context.addPoints(newPoints);
  };

  const animateBadge = () => {
    handleClose();
    addPoints();

    let badge = context.badges.get(2);
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
      <FormEditor
        getNewHTML={getNewHTML}
        setFormInParent={setFormInParent}
        level="6"
        toggle={false}
              initialCSS="

              .image__wrapper {
                  max-height: 450px;
                  max-width: 500px;
                  margin-top: 30px;
                  margin-left: auto;
                  margin-right: auto;
              }
        
              img {
                height: 66px;
                width: auto;
                margin-left: auto;
                margin-right: auto;
                border-radius: 5px 5px 0 0;
                }
                
                .blurred { filter: blur(4px); }
            
            "
              initialHTML="
            <div class='image__wrapper' id='understand_sentence'>
                <img src='/images/Sign_Language/i.jpg' alt='Image of sample phrases in american sign language'>
                <img src='/images/Sign_Language/do.jpg' alt='Image of sample phrases in american sign language'>
                <img src='/images/Sign_Language/not.jpg' alt='Image of sample phrases in american sign language'>
                <img src='/images/Sign_Language/understand.jpg' class='blurred' alt='Image of sample phrases in american sign language' id='understand' data-val='2'>
                <img src='/images/Sign_Language/you.jpg' alt='Image of sample phrases in american sign language'>
            </div>
                
                
            <div class='image__wrapper' id='write_sentence'>
                <img src='/images/Sign_Language/please.jpg' alt='Image of sample phrases in american sign language'>
                <img src='/images/Sign_Language/write.jpg' class='blurred' alt='Image of sample phrases in american sign language' id='write' data-val='3'>
            </div>


            <div class='image__wrapper' id='lunch_sentence'>
                <img src='/images/Sign_Language/do.jpg' alt='Image of sample phrases in american sign language'>
                <img src='/images/Sign_Language/you.jpg' alt='Image of sample phrases in american sign language'>
                <img src='/images/Sign_Language/want.jpg' class='blurred' alt='Image of sample phrases in american sign language' id='want' data-val='2'>
                <img src='/images/Sign_Language/lunch.jpg' alt='Image of sample phrases in american sign language'>
                <img src='/images/Sign_Language/with.jpg' alt='Image of sample phrases in american sign language'>
                <img src='/images/Sign_Language/us.jpg' alt='Image of sample phrases in american sign language'>
                <img src='/images/Sign_Language/questionmark.jpg' alt='Image of sample phrases in american sign language'>
            </div>


            <div class='image__wrapper' id='lunch_sentence'>
                <img src='/images/Sign_Language/lets.jpg' alt='Image of sample phrases in american sign language'>
                <img src='/images/Sign_Language/play.jpg' class='blurred' alt='Image of sample phrases in american sign language' id='play' data-val='1'>
                <img src='/images/Sign_Language/after.jpg' alt='Image of sample phrases in american sign language' >
            </div>
        
        
        "
        formProps={[
          {
            formFields: [
              {
                options: [
                  {
                    name: "deduce",
                    value: "deduce",
                  },
                  {
                    name: "understand",
                    value: "understand",
                  },
                  {
                    name: "draw a conclusion",
                    value: "draw a conclusion",
                  },
                ],
                placeholder: "extrapolate",
                component: "select",
                name: "understand",
                error: "error",
                textBefore: "I do not",
                textAfter: "you.",
              },
              {
                options: [
                  {
                    name: "formulate by draft",
                    value: "formulate by draft",
                  },
                  {
                    name: "transcribe",
                    value: "transcribe",
                  },
                  {
                    name: "write",
                    value: "write",
                  },
                ],
                placeholder: "compose and set down on paper",
                component: "select",
                name: "write",
                error: "error",
                textBefore: "Please",
                textAfter: "",
              },
              {
                options: [
                  {
                    name: "languish to",
                    value: "languish to",
                  },
                  {
                    name: "want to",
                    value: "want to",
                  },
                  {
                    name: "are desirous of",
                    value: "are desirous of",
                  },
                ],
                placeholder: "have an inclination for",
                component: "select",
                name: "want",
                error: "error",
                textBefore: "Do you ",
                textAfter: "lunch with us?",
              },
              {
                options: [
                  {
                    name: "play",
                    value: "play",
                  },
                  {
                    name: "participate in our cavort",
                    value: "participate in our cavort",
                  },
                  {
                    name: "diddle",
                    value: "diddle",
                  },
                ],
                placeholder: "performance in our diversion",
                component: "select",
                name: "play",
                error: "error",
                textBefore: "Let's",
                textAfter: "afterwards?",
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
          <Button secondary={true} target={"/personas/clara"}>
            <Image src={arrowLeftDark} alt="arrow-left-icon" />
            Clara Overview
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
              <h3>You have succeded the Sign Language Level with</h3>
              <Points
                currVal={3}
                maxVal={3}
              />
            </div>
            <div className={"col-6"}>
              <Progress val={3} maxval={3} label={"Sign Language"} />
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
          titleText={"Badge for Clara"}
          id="badge-clara"
          handleClose={handleCloseBadge}
        />
      ) : null}
    </LevelStyles>
  );
};

export default SignlanguageChecker;
