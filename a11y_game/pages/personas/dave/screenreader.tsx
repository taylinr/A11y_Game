import Head from "next/head";
import React, { useState } from "react";
import ScreenReaderChecker from "../../../components/Level/ScreenReaderChecker";
import Modal from "../../../components/Modal/Modal";
import PersonaLevel from "../../../components/PersonaLevel/PersonaLevel";
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
            <h1>Screenreader</h1>
            <p>
              Optimize this shop product to be understandable with a
              screenreader.
            </p>
          </div>
          <div className="col-3">
            <div className="col-3">
              <PersonaLevel
                name={"dave"}
                emotion={"neutral"}
                alt="Image of Dave"
                valid={valid}
                validationText={
                  valid
                    ? "Now I understand what this product describes!"
                    : "This product does't have a good description"
                }
              />
            </div>
          </div>
        </div>
        <ScreenReaderChecker setValidInParent={setValid} />

        {isOpenModal ? (
          <Modal
            titleText="Font Size Level Help"
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
