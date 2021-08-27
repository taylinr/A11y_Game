import Head from "next/head";
import React, { useState } from "react";
import EasyLanguageChecker from "../../../components/Level/EasyLanguageChecker";
import PersonaLevel from "../../../components/PersonaLevel/PersonaLevel";
export default function Home() {
  const [valid, setValid] = useState<boolean>(false);
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
            <div className="col-3">
              <PersonaLevel
                name={"alex"}
                emotion={"neutral"}
                alt="Image of Alex"
                text={[
                  <p key="help">
                    Click <a href="">here</a> for help!
                  </p>,
                ]}
                valid={valid}
                validationText={
                  valid
                    ? "Now this is understandable!"
                    : "Still to complicated, try other words!"
                }
              />
            </div>
          </div>
        </div>
        <EasyLanguageChecker setValidInParent={setValid} />
      </main>
    </div>
  );
}
