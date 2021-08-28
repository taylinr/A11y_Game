import Head from "next/head";
import { useState } from "react";
import Button from "../../../components/Button/Button";
import ColorContrastChecker from "../../../components/Level/ColorContrastChecker";
import PersonaLevel from "../../../components/PersonaLevel/PersonaLevel";
import Modal from "../../../components/Modal/Modal";
import contrast from "/images/Contrast.png";
import Image from "next/image";

export default function Home() {
  const [contrastRatio, setContrastratio] = useState<number>(0);
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
            <h1>Color & Contrast</h1>
            <p>
              Change the text- and background color in the panels below to be
              accessible, the higher the contrast ratio the better!
            </p>
          </div>
          <div className="col-3">
            <Button help={true} primary={true} onClick={activateModal}>
              Help
            </Button>
            <PersonaLevel
              name={"dave"}
              emotion={contrastRatio > 5 ? "happy" : "neutral"}
              alt="Image of Dave"
              valid={contrastRatio > 5}
              validationText={
                contrastRatio > 5
                  ? "Contrast Ratio of " +
                    contrastRatio?.toFixed(1) +
                    " is great!"
                  : "Contrast Ratio of " +
                    contrastRatio?.toFixed(1) +
                    " is too small."
              }
            />
          </div>
        </div>
        <ColorContrastChecker setContrastInParent={setContrastratio} />
        {isOpenModal ? (
          <Modal
            titleText="Color And Contrast Level Help"
            id={"help"}
            handleClose={handleClose}
          >
            <div className={"col-12 row"}>
              <h2>Help</h2>
              <div className={"col-6"}>
                <h3>Color</h3>
                <p>
                  The visual contrast between different colours is a key factor
                  in making things perceivable. On the most basic level that
                  means that they have to clearly stand out from their
                  background.
                </p>
                <h3>Contrast</h3>
                <p>
                  The{" "}
                  <a href="https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=143#contrast-minimum">
                    Web Content Accessibility Guidelines (WCAG)
                  </a>{" "}
                  specify a minimal contrast ratio of <strong>4.5:1</strong>{" "}
                  against adjacent colour(s) for text in General. An exception
                  is made for large-scale text: It is considered easier to read
                  and can therefore be set in a lower contrast ratio of at least
                  3:1.
                </p>
              </div>

              <div className={"col-6"}>
                <h3>Calculation</h3>
                <p>
                  To calculate the contrast ratio, the relative luminance of the
                  lighter colour is divided through the relative luminance of
                  the darker colour: (Light + 0.05) / (Dark + 0.05)
                  <Image
                    src={"/images/Contrast.png"}
                    height={29}
                    width={396}
                    className={"persona__image"}
                    alt="image that displays the contrast ratio as a course from black (0) to white (1)"
                    priority={true}
                  />
                </p>
                <h3>Tools</h3>
                <p>
                  To calculate the contrast ratio between two colors, you can
                  use tools and applications f.E:
                  <ul>
                    <li>
                      <a href="https://contrast-ratio.com/">
                        Contrast Ratio - Web Tool
                      </a>
                    </li>
                    <li>
                      <a href="https://www.tpgi.com/color-contrast-checker/">
                        Colour Contrast Analyser - Application
                      </a>
                    </li>
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
