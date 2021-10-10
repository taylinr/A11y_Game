import Head from "next/head";
import React, { useState } from "react";
import EasyLanguageChecker from "../../../components/Level/EasyLanguageChecker";
import PersonaLevel from "../../../components/PersonaLevel/PersonaLevel";
import Modal from "../../../components/Modal/Modal";
import Button from "../../../components/Button/Button";
const Home = () => {
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
            <h1>Easy Language</h1>
            <p>
              This Text could be way easier to read, get rid of all these
              complicated terms and words.
            </p>
          </div>
          <div className="col-3">
            <Button help={true} primary={true} onClick={activateModal}>
              Help
            </Button>
            <PersonaLevel
              name={"alex"}
              emotion={"neutral"}
              alt="Image of Alex"
              valid={valid}
              validationText={
                valid
                  ? "Now this is understandable!"
                  : "Still to complicated, try other words!"
              }
            />
          </div>
        </div>
        <EasyLanguageChecker setValidInParent={setValid} />
        {isOpenModal ? (
          <Modal
            titleText="Easy Language Level Help"
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

export default Home;