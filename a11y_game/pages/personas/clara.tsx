import Head from "next/head";
import Button from "../../components/Button/Button";
import PersonaSmall from "../../components/PersonaSmall/PersonaSmall";
import Context from "../../components/Context/Context";
import React, { useContext } from "react";
import arrowRight from "../../assets/arrow-right.svg";
import checkmark from "../../assets/checkmark.svg";
import arrowLeftDark from "../../assets/arrow-left-dark.svg";
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
              <h1>Audio Barriers</h1>
              <h2>Complete all the Levels to get your second Batch</h2>
            </div>
            <div className={"col-11"}>
              <p>...tbc</p>
            </div>
          </div>
          <div className={"col-3"}>
            <div className="button-group">
              <Button
                target={"/personas/clara/captions"}
                inactive={!levelDone(4)}
                primary={!levelDone(5)}
                accomplished={levelDone(5)}
              >
                Captions
                {levelDone(5) ? (
                  <Image src={checkmark} alt="checkmark-icon" />
                ) : (
                  <Image src={arrowRight} alt="arrow-right-icon" />
                )}
              </Button>
              <Button
                target={"/personas/clara/signlanguage"}
                inactive={!levelDone(5)}
                primary={!levelDone(6)}
                accomplished={levelDone(6)}
              >
                Sign Language
                {levelDone(6) ? (
                  <Image src={checkmark} alt="checkmark-icon" />
                ) : (
                  <Image src={arrowRight} alt="arrow-right-icon" />
                )}
              </Button>
            </div>
          </div>
        </div>
        <div className="col-3">
          <Button secondary={true} target={"/personas"}>
            <Image src={arrowLeftDark} alt="arrow-left-icon" />
            Personas Overview
          </Button>
        </div>
        <div className="col-6">
          {" "}
          <p></p>{" "}
        </div>
        <div className="col-3">
          {levelDone(6) ? (
            <Button primary={true} target={"/personas/alex"}>
              Help Alex
              <Image src={arrowRight} alt="arrow-right-icon" />
            </Button>
          ) : (
            <Button inactive={true}>Help Alex</Button>
          )}
        </div>
      </main>
    </div>
  );
}
