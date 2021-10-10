import Head from "next/head";
import { useState } from "react";
import Button from "../../../components/Button/Button";
import CaptionsChecker from "../../../components/Level/CaptionsChecker";
import PersonaLevel from "../../../components/PersonaLevel/PersonaLevel";
import Modal from "../../../components/Modal/Modal";
import contrast from "/images/Contrast.png";
import Image from "next/image";

const Home = () => {
  const [valid, setValid] = useState<boolean>(false);
  const [points, setPoints] = useState<number>(0);
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
            <h1>Captions</h1>
            <p>
              Change the HTML5 video, so that it is accessible. An english
              caption file is provided under the url:{" "}
              <strong>/video/sintel-en.vtt</strong>, make these captions load by
              default.
            </p>
          </div>
          <div className="col-3">
            <Button help={true} primary={true} onClick={activateModal}>
              Help
            </Button>
            <PersonaLevel
              name={"clara"}
              emotion={valid ? "happy" : "neutral"}
              alt="Image of Clara"
              valid={valid}
              validationText={
                valid
                  ? points > 2
                    ? "Great, I love this video!"
                    : "Better, but you can still improve the captions"
                  : "Add captions to the video, to make it accessible!"
              }
            />
          </div>
        </div>
        <CaptionsChecker
          setValidInParent={setValid}
          setPointsInParent={setPoints}
        />
        {isOpenModal ? (
          <Modal
            titleText="Captions Level Help"
            id={"help"}
            handleClose={handleClose}
          >
            <div className={"col-12 row"}>
              <h2>Help</h2>
              <div className={"col-6"}>
                <h3>Captions</h3>
                <p>
                  Captions (called “subtitles” in some areas) provide content to
                  people who are Deaf and hard-of-hearing. Captions are a text
                  version of the speech and non-speech audio information needed
                  to understand the content. They are synchronized with the
                  audio and usually shown in a media player when users turn them
                  on.
                </p>

                <h3>AI Generated Captions</h3>
                <p>
                  Some websites include automatically generated captions to
                  their videos. This is a great ideo in theory, but still not
                  working correktly in most cases, especially when used for
                  different languages. The usage of human-made captions is
                  therefor recommended
                </p>

                <h3> Captions vs. Subtitles</h3>
                <p>
                  Captions are made for deaf people or people in circumstances
                  wich don't allow to turn on the sound. Captions provide more
                  that just the spoken words, but also sounds and other
                  important metada{" "}
                </p>
                <p>
                  Subtitles are mostly made for people that aren't fluid in a
                  language or don't understand a dialect. They mostly only
                  contain the spoken words.
                </p>
              </div>

              <div className={"col-6"}>
                <h3>HTML5 Videos</h3>
                <p>
                  HTML5 allows you to add subtitles and captions to your videos
                  with relative ease. With the <strong>track</strong>-tag
                  captions or subtitles can be added. The correct file format of
                  the subtitle or caption data is Web Video Text Tracks or
                  WebVTT.
                </p>

                <h3>Track Attributes</h3>
                <p>
                  <ul>
                    <li>
                      <strong>label</strong>: The label for the Subtitles
                      (mostly the languge name)
                    </li>
                    <li>
                      <strong>kind</strong>: type of the text track (subtitles
                      or captions)
                    </li>
                    <li>
                      <strong>src</strong>: path of the file in your local drive
                      or online
                    </li>
                    <li>
                      <strong>srclang</strong>: shortform of the language (f.E.
                      "en")
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

export default Home;