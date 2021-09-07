import Head from "next/head";
import React, { useState } from "react";
import AriaChecker from "../../../components/Level/AriaChecker";
import PersonaLevel from "../../../components/PersonaLevel/PersonaLevel";
import Modal from "../../../components/Modal/Modal";
import Button from "../../../components/Button/Button";

export default function Home() {
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
            <h1>Aria</h1>
            <p>Use aria attributes to make the tab module accessible.</p>
          </div>
          <div className="col-3">
            <Button help={true} primary={true} onClick={activateModal}>
              Help
            </Button>
            <PersonaLevel
              name={"dave"}
              emotion={"neutral"}
              alt="Image of Dave"
              valid={valid}
              validationText={
                valid
                  ? points > 2
                    ? "Great, everything is understandable now!"
                    : "This is ok, but you can still optimize it!"
                  : "Listen to the output voice and add more aria-attributes"
              }
            />
          </div>
        </div>
        <AriaChecker
          setValidInParent={setValid}
          setPointsInParent={setPoints}
        />
        {isOpenModal ? (
          <Modal
            titleText="Aria Level Help"
            id={"help"}
            handleClose={handleClose}
          >
            <div className={"col-12 row"}>
              <h2>Help</h2>
              <div className={"col-6"}>
                <h3>ARIA</h3>
                <p>
                  When it comes to requirements of modern interactive websites,
                  sometimes the semantic vocabulary of HTML may not be enough
                  anymore. To fill this gap, the Accessible Rich Internet
                  Application (ARIA) specification was introduced: it describes
                  how to add semantics to HTML content in order to make user
                  controls and dynamic content more accessible.
                </p>

                <h3>Accessibility Tree</h3>
                <p>
                  Browsers create an accessibility tree based on the DOM tree,
                  which is used by platform-specific Accessibility APIs to
                  provide a representation that can be understood by assistive
                  technologies, such as screen readers.
                </p>
                <p>
                  Aria attributes and roles define the way, names and
                  descriptions of the elements in the accessibility tree will be
                  set.
                </p>
              </div>
              <div className={"col-6"}>
                <h3>Tab List</h3>
                <p>
                  The Tab List is a great example of html-patterns that dont
                  have their own native HTML equivalents. To show how ARIA
                  works, add the roles that definde buttons as{" "}
                  <strong>role="tab"</strong> and button lists as{" "}
                  <strong>role="tablist"</strong>. The Tab Contents should have
                  the <strong>role="tabpanel"</strong>. Don't forget to
                  determine which tab is currently selected and which panels are
                  hidden.
                </p>
                <h3>Roles & Attributes</h3>
                <p>
                  <ul>
                    <li>
                      <strong>tablist</strong>: An element with the tablist role
                      indicates that the following tabs belong to the tablist.
                    </li>
                    <li>
                      <strong>tab</strong>: An element with the tab role
                      controls the visibility: ; of an associated element with
                      the tabpanel role.
                    </li>
                    <li>
                      <strong>tabpanel</strong>: The tabpanel role indicates
                      that the content is the content part of a tablist.
                    </li>
                    <li>
                      <strong>aria-selected</strong>: indicates which tab is
                      currently selected
                    </li>

                    <li>
                      <strong>aria-hidden</strong>: Hidden elements will not be
                      included in the accessibility tree
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
