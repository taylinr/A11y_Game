import Head from "next/head";
import React, { useState } from "react";
import FontSizeChecker from "../../../components/Level/FontSizeChecker";
import PersonaLevel from "../../../components/PersonaLevel/PersonaLevel";
export default function Home() {
  const [fontSize, setFontsize] = useState<number>(0);
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
            <p>
              Help David to read the text on the right side by increasing the
              default size to at least 16px and make it relative to the Browsers
              font size.
            </p>
          </div>
          <div className="col-3">
            <div className="col-3">
              <PersonaLevel
                name={"dave"}
                emotion={fontSize > 16 ? "happy" : "neutral"}
                alt="Image of Dave"
                text={[
                  <p key="help">
                    Click <a href="">here</a> for help!
                  </p>,
                  <p key="toggle">
                    Want to see color? <br /> Click the greyscale toggle!
                  </p>,
                ]}
              />
            </div>
          </div>
        </div>
        <FontSizeChecker setFontSizeInParent={setFontsize} />
      </main>
    </div>
  );
}
