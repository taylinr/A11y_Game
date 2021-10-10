import Head from "next/head";
import Button from "../../components/Button/Button";
import PersonaSmall from "../../components/PersonaSmall/PersonaSmall";
import Context from "../../components/Context/Context";
import React, { useContext } from "react";
import arrowRight from "../../assets/arrow-right.svg";
import checkmark from "../../assets/checkmark.svg";

import arrowLeftDark from "../../assets/arrow-left-dark.svg";
import Image from "next/image";

const Home = () => {
  const context = useContext(Context);

  const levelDone = (level: number) => {
    return context.submittedLevel.has(level);
  };
  
  const badge: number | undefined = context.badges.get(3);

  return (
    <div>
      <Head>
        <title>A11y Game</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={"col-12 row"}>
          <div className={"col-3"}>
            <PersonaSmall
              name={"alex"}
              emotion={levelDone(8) ? "happy" : "neutral"}
              alt="Image of Alex"
              text="Online-Newspaper articles shouldnt riquire a masters-degree to be readable"
              badge={badge ? badge : 0}
            />
          </div>
          <div className={"col-6"}>
            <div className={"col-12"}>
              <h1>Cognitive Barriers</h1>
              <h2>Complete all the Levels to get your third badge</h2>
            </div>
            <div className={"col-11"}>
              <p>
                Cognitive barriers, could affect persons who have greater
                difficulty with mental tasks than the average person. Cognitive
                disabilities are by far the most common type of disability. Most
                cognitive disabilities are rooted in biology or physiology.
              </p>
              <p>
                People who aren't native speakers to a language or people from
                diffrent cultures could also be affected by cognitive barriers.
              </p>
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
          {levelDone(8) ? (
            <Button primary={true} target={"/personas/semiha"}>
              Help Semiha
              <Image src={arrowRight} alt="arrow-right-icon" />
            </Button>
          ) : (
            <Button inactive={true}>Help Semiha</Button>
          )}
        </div>
      </main>
    </div>
  );
}

export default Home;