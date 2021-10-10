import Head from "next/head";
import React, { useState } from "react";
import SignlanguageChecker from "../../../components/Level/SignlanguageChecker";
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
            <h1>Sign Language</h1>
            <p>
              Translating complicated words and terms into sign language can be hard, thats why easy language is impoprtant for people with hearing disabilities.
              <br />
              Select the easiest words and watch the signs.
            </p>
          </div>
          <div className="col-3">
            <Button help={true} primary={true} onClick={activateModal}>
              Help
            </Button>
            <PersonaLevel
              name={"clara"}
              emotion={"neutral"}
              alt="Image of Clara"
              valid={valid}
              validationText={
                valid
                  ? "Now this is understandable!"
                  : "Still to complicated, try other words!"
              }
            />
          </div>
        </div>
        <SignlanguageChecker setValidInParent={setValid} />
        {isOpenModal ? (
          <Modal
            titleText="Sign Language Level Help"
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