import Head from "next/head";
import { useState } from "react";
import Button from "../../../components/Button/Button";
import KeyboardChecker from "../../../components/Level/KeyboardChecker";
import PersonaLevel from "../../../components/PersonaLevel/PersonaLevel";
import Modal from "../../../components/Modal/Modal";
import Image from "next/image";

export default function Home() {
  const [valid, setValid] = useState<boolean>(false);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const activateModal = () => {
    setIsOpenModal(true);
  };

  const handleClose = () => {
    setIsOpenModal(false);
  };

  return (
    <div>
      <Head>
        <title>A11y Game</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="col-12 row ">
          <div className="col-9">
            <h1>Keyboard Only</h1>
            <p></p>
          </div>
          <div className="col-3">
            <Button help={true} primary={true} onClick={activateModal}>
              Help
            </Button>
            <PersonaLevel
              name={"dave"}
              emotion={valid ? "happy" : "neutral"}
              alt="Image of Semiha"
              valid={valid}
              validationText={""}
            />
          </div>
        </div>
        <KeyboardChecker setValidInParent={setValid} />
        {isOpenModal ? (
          <Modal
            titleText="Color And Contrast Level Help"
            id={"help"}
            handleClose={handleClose}
          >
            <div className={"col-12 row"}>
              <h2>Help</h2>
              <div className={"col-6"}></div>

              <div className={"col-6"}></div>

              <div className="col-12 row">
                <p>
                  For Further Information look up the{" "}
                  <a href="https://www.w3.org/WAI/standards-guidelines/">
                    WCAG Guidelines
                  </a>{" "}
                  and the{" "}
                  <a href="https://www.accessibility-developer-guide.com/">
                    Accessibility Developer Guide
                  </a>
                </p>
              </div>
            </div>
          </Modal>
        ) : null}
      </main>
    </div>
  );
}
