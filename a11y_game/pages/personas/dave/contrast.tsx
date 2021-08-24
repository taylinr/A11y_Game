import Head from "next/head";
import { useState } from "react";
import ColorContrastChecker from "../../../components/Level/ColorContrastChecker";
import PersonaLevel from "../../../components/PersonaLevel/PersonaLevel";
export default function Home() {
  const [contrastRatio, setContrastratio] = useState<number>(0);

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
              Some people with visual disabilities can't see or distinguish
              (specific) colors.
              <br />
              Change the Text and Background Color Contrast to be accessible,
              the higher the contrast ratio the better!
            </p>
          </div>
          <div className="col-3">
            <PersonaLevel
              name={"dave"}
              emotion={contrastRatio > 5 ? "happy" : "neutral"}
              alt="Image of Dave"
              text={[
                <p key="help">
                  Click <a href="">here</a> for help!
                </p>,
                <p key="toggle">
                  Want to see color? <br /> Click the greyscale toggle!
                </p>,
              ]}
              valid={contrastRatio > 5}
              validationText={
                contrastRatio > 5
                  ? "Contrast Ratio is " + contrastRatio?.toFixed(2)
                  : "Contrast Ratio is too small"
              }
            />
          </div>
        </div>
        <ColorContrastChecker setContrastInParent={setContrastratio} />
      </main>
    </div>
  );
}
