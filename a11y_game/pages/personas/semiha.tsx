import Head from "next/head";
import Button from "../../components/Button/Button";
import PersonaSmall from "../../components/PersonaSmall/PersonaSmall";
import Context from "../../components/Context/Context";
import React, { useContext } from "react";
import arrowRight from "../../assets/arrow-right.svg";
import checkmark from "../../assets/checkmark.svg";
import Image from "next/image";
import arrowLeftDark from "../../assets/arrow-left-dark.svg";

const Home = () => {
  const context = useContext(Context);

  const levelDone = (level: number) => {
    return context.submittedLevel.has(level);
  };

  const badge: number | undefined = context.badges.get(4);

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
              name={"semiha"}
              emotion={levelDone(9) ? "happy" : "neutral"}
              alt="Image of Semhia"
              text="Online shopping with Keyboard-only is hard, but physical shops arent accessible either"
              badge= {badge? badge : 0}
            />
          </div>
          <div className={"col-6"}>
            <div className={"col-12"}>
              <h1>Motor Barriers</h1>
              <h2>Complete all the Levels to get your final badge</h2>
            </div>
            <div className={"col-11"}>
              <p>...tbc</p>
            </div>
          </div>
          <div className={"col-3"}>
            <div className="button-group">
              <Button
                target={"/personas/semiha/keyboard"}
                inactive={!levelDone(8)}
                primary={!levelDone(9)}
                accomplished={levelDone(9)}
              >
                Keyboard only
                {levelDone(9) ? (
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
          {levelDone(9) ? (
            <Button primary={true} target={"/finish"}>
              Finish
              <Image src={arrowRight} alt="arrow-right-icon" />
            </Button>
          ) : (
            <Button inactive={true}>Finish</Button>
          )}
        </div>
      </main>
    </div>
  );
}

export default Home;