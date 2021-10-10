import Head from "next/head";
import React, { useState } from "react";
import Button from "../../../components/Button/Button";
import ScreenReaderChecker from "../../../components/Level/ScreenReaderChecker";
import Modal from "../../../components/Modal/Modal";
import PersonaLevel from "../../../components/PersonaLevel/PersonaLevel";
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
            <h1>Screenreader</h1>
            <p>
              Optimize this shop product to be understandable with a
              screenreader.
            </p>
          </div>
          <div className="col-3">
            <div className="col-3">
              <Button help={true} primary={true} onClick={activateModal}>
                Help
              </Button>
              <PersonaLevel
                name={"dave"}
                emotion={valid ? "happy" : "neutral"}
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
              <div className={"col-6"}>
                <h3>Screen Readers</h3>
                <p>
                  Similar to the reading of a traditional book, screen readers
                  only announce plain content, enriched with semantical
                  information. Visual attributes are totally ignored.
                  Interestingly, some CSS still does have influence on screen
                  readers.
                </p>
                <h3>Accessibility Tree</h3>
                <p>
                  Browsers create an accessibility tree based on the DOM tree,
                  which is used by platform-specific Accessibility APIs to
                  provide a representation that can be understood by assistive
                  technologies, such as screen readers.
                </p>
              </div>
              <div className={"col-6"}>
                <h3>Descriptive Text</h3>
                <p>
                  Since the screenreader doesnt interpret images and most
                  styles, developer and content manager have to make shure that
                  elements that rely on images still have good and declaring
                  descriptive texts.
                </p>
                <h3>Alt-Texts</h3>
                <p>
                  For Screenreaders but also for use in situations where the
                  image cannot be seen/displayed or takes a long time to render
                  because of a slow internet connection alt texts are mandatory.
                  Some Tipps for writing good alt-texts:
                  <ul>
                    <li>Be specific, and succinct</li>
                    <li>Never start with “Image of …” or “Picture of …” </li>
                    <li>Use keywords sparingly</li>
                    <li>Include text that's part of the image</li>
                    <li>Don't repeat yourself</li>
                    <li>Don't add alt text to 'decorative' images</li>
                  </ul>
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