import Head from "next/head";
import React, { useState } from "react";
import SemanticsChecker from "../../../components/Level/SemanticsChecker";
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
            <h1>Semantics</h1>
            <p>
              Cultural differences, colorblindness or cognitive disabilities
              makes it hard for some people to understand the semantic of signs
              and icons. Help them by making these buttons accessible.
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
                  : "What do all these signs mean?"
              }
            />
          </div>
        </div>
        <SemanticsChecker setValidInParent={setValid} />
        {isOpenModal ? (
          <Modal
            titleText="Semantics Level Help"
            id={"help"}
            handleClose={handleClose}
          >
            <div className={"col-12 row"}>
              <h2>Help</h2>
              <div className={"col-6"}>
                <h3>Cultural Differences</h3>
                <p>
                  How can your icon design be accessible to all if your design
                  doesn't make sense to a whole culture? A classic example is a
                  post box. In Britain people think of a bright red post box
                  with the royal crest, but in Germany postboxes are bright
                  yellow with the rather cool bugle mark.
                </p>
                <p>
                  Another great example is the use of circles and crosses in
                  Japan. In Britain user might ‘select’ something by placing a
                  cross in the box, but in Japan you’d put a circle – a cross
                  means the opposite!
                </p>
              </div>
              <div className={"col-6"}>
                <h3>Use labels and descriptions</h3>
                <p>
                  Icons should therefore never stand for themselves, they have
                  to be understandable from context. But it is always a good
                  idea to use proper labels and descriptions to make shure
                  everyone understands the intended meaning.
                </p>
              </div>

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