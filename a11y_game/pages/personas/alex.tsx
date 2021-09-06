import Head from "next/head";
import Button from "../../components/Button/Button";
import PersonaSmall from "../../components/PersonaSmall/PersonaSmall";
import Context from "../../components/Context/Context";
import React, { useContext } from "react";
import arrowRight from "../../assets/arrow-right.svg";
import checkmark from "../../assets/checkmark.svg";
import Image from "next/image";

export default function Home() {
  const context = useContext(Context);

  const levelDone = (level: number) => {
    return context.submittedLevel.has(level);
  };

  return (
    <div>
      <Head>
        <title>A11y Game</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={"col-12 row"}>
          <div className={"col-3"}></div>
          <div className={"col-6"}>
            <div className={"col-12"}>
              <h1>Cognitive Disabilities</h1>
              <h2>Complete all the Levels to get your third Batch</h2>
            </div>
            <div className={"col-11"}>
              <p>...tbc</p>
            </div>
          </div>
          <div className={"col-3"}>
            <div className="button-group">
              <Button
                target={"/personas/alex/semantics"}
                inactive={!levelDone(6)}
                primary={!levelDone(7)}
                accomplished={levelDone(7)}
              >
                Semantics
                {levelDone(7) ? (
                  <Image src={checkmark} alt="checkmark-icon" />
                ) : (
                  <Image src={arrowRight} alt="arrow-right-icon" />
                )}
              </Button>
              <Button
                target={"/personas/alex/language"}
                inactive={!levelDone(7)}
                primary={!levelDone(8)}
                accomplished={levelDone(8)}
              >
                Easy Language
                {levelDone(8) ? (
                  <Image src={checkmark} alt="checkmark-icon" />
                ) : (
                  <Image src={arrowRight} alt="arrow-right-icon" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
