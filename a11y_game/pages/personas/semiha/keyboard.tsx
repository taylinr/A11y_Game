import Head from "next/head";
import { useState } from "react";
import Button from "../../../components/Button/Button";
import KeyboardChecker from "../../../components/Level/KeyboardChecker";
import PersonaLevel from "../../../components/PersonaLevel/PersonaLevel";
import Modal from "../../../components/Modal/Modal";
import Image from "next/image";

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
            <h1>Keyboard Only</h1>
            <p>
              Try to access the submit-button with keyboard only navigation and
              finish the game. Change the code to get there!
            </p>
          </div>
          <div className="col-3">
            <Button help={true} primary={true} onClick={activateModal}>
              Help
            </Button>
            <PersonaLevel
              name={"semiha"}
              emotion={valid ? "happy" : "neutral"}
              alt="Image of Semiha"
              valid={valid}
              validationText={
                valid
                  ? "Great, now enter the submit button!"
                  : "Navigate by clicking the Tab-Button"
              }
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
              <div className={"col-6"}>
                <h3>Keyboard Only</h3>
                <p>
                  Due to physical restrictions, many users cannot control a
                  pointing device like a mouse or touch screen. So they rely on
                  keyboard usage only, and thus, software must be fully
                  functional with a keyboard only. In this chapter, you will
                  learn everything you need to know about browsing websites
                  using a keyboard only.
                </p>
                <h3>Keyboard Shortcuts</h3>
                <p>
                  For the future, we suggest you try to use keyboard shortcuts
                  instead of your mouse. This way, you will automatically test
                  your own implementations for keyboard only accessibility while
                  developing them.
                  <br />
                  The following is a collection of some well known shortcuts
                  <ul>
                    <li>Tab: Next Element</li>
                    <li>Tab + Shift: Previous Element</li>
                    <li>Enter: Confirm</li>
                    <li>Ctrl + C: Copy</li>
                    <li>Ctrl + V: Paste</li>
                    <li>Ctrl + S: Save</li>
                  </ul>
                </p>
              </div>

              <div className={"col-6"}>
                <h3>Tabindex</h3>
                <p>
                  The default tab order provided by the DOM position of native
                  elements is convenient, but there are times when you'll want
                  to modify the tab order, and physically moving elements in the
                  HTML isn't always an optimal, or even a feasible, solution.
                  For these cases you can use the tabindex HTML attribute to
                  explicitly set an element's tab position.
                </p>

                <h3>Anchors VS. Buttons</h3>
                <p>
                  Use buttons to signal clickable actions, such as “download,”
                  “sign up,” or “log out.” You may use links for less popular or
                  less important actions. If you want something that looks and
                  acts like a button, try to always use the button element
                  rather than styling a link like a button.
                </p>
                <p>
                  For actual Links and if you want a user to navigate to a new
                  page or to a different target on the same page, use an anchor
                  element
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