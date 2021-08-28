import Head from "next/head";
import React, { useState } from "react";
import FontSizeChecker from "../../../components/Level/FontSizeChecker";
import PersonaLevel from "../../../components/PersonaLevel/PersonaLevel";
import Modal from "../../../components/Modal/Modal";
import Button from "../../../components/Button/Button";
export default function Home() {
  const [fontSize, setFontsize] = useState<number>(0);
  const [fontSizeRelative, setFontsizeRelative] = useState<boolean>(false);

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
            <h1>Font Size</h1>
            <p>Change the text size in the panels below to be accessible.</p>
          </div>
          <div className="col-3">
            <Button help={true} primary={true} onClick={activateModal}>
              Help
            </Button>
            <PersonaLevel
              name={"dave"}
              emotion={fontSize > 16 ? "happy" : "neutral"}
              alt="Image of Dave"
              text={[
                <p key="help">Change the font-size in the CSS tab</p>,
                <p key="toggle">
                  Want to see clearly? <br /> Click the Blur toggle!
                </p>,
              ]}
              valid={fontSize >= 16}
              validationText={
                fontSize >= 16
                  ? fontSizeRelative
                    ? "Lowest font size is " +
                      fontSize +
                      "px and in relative units"
                    : "Font size is " +
                      fontSize +
                      "px but it isn't in relative units"
                  : "Font size " + fontSize + "px is too small"
              }
            />
          </div>
        </div>
        <FontSizeChecker
          setFontSizeInParent={setFontsize}
          setRelativeInParent={setFontsizeRelative}
        />
        {isOpenModal ? (
          <Modal
            titleText="Font Size Level Help"
            id={"help"}
            handleClose={handleClose}
          >
            <div className={"col-12 row"}>
              <h2>Help</h2>
              <div className={"col-6"}>
                <h3>Size and Resizeability</h3>
                <p>
                  There are two main concerns on font-sizes. One is ensuring
                  that default font sizes are not too small per default. Another
                  is ensuring that text can be expanded to 200% on Web sites to
                  be accessible to everyone.
                </p>
                <h3>Default Size</h3>
                <p>
                  For traditional computer monitors, a size of 16px is generally
                  recommended for body text. Ensure that default fonts are no
                  smaller than 12px
                </p>
              </div>
              <div className={"col-6"}>
                <h3>Relative Sizes</h3>
                <p>
                  The{" "}
                  <a href="https://www.w3.org/TR/WCAG20-TECHS/C14.html">
                    WCAG Guidelines recommend relative font-sizes
                  </a>{" "}
                  such as percentages or units of em, ensuring that text can be
                  zoomed to 200%. Along with that goes a recommendation for
                  liquid layouts which can accommodate text zooms.
                </p>

                <p>
                  A current accessibility recommendation is to use relative font
                  sizes instead of absolute sizes such as pixels or points. This
                  allows text to be more easily resized appropriately across
                  multiple devices and platforms.
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
