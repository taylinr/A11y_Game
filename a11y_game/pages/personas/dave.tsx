import Head from "next/head";
import Button from "../../components/Button/Button";
import PersonaSmall from "../../components/PersonaSmall/PersonaSmall";
import Context from "../../components/Context/Context";
import React, { useContext } from "react";
import arrowRight from "../../assets/arrow-right.svg";
import checkmark from "../../assets/checkmark.svg";
import { Form, TextField } from "../../components/Form/Form";
import Image from "next/image";

export default function Home() {
  const context = useContext(Context);

  const levelDone = (level: number) => {
    return context.submittedLevel.has(level);
  };

  const getPoints = (level: number) => {
    return context.submittedLevel.get(level);
  };

  const level1Done: boolean = levelDone(1);
  const level2Done: boolean = levelDone(2);
  const level3Done: boolean = levelDone(3);
  const level4Done: boolean = levelDone(4);

  const allLevelDone = level1Done && level2Done && level3Done && level4Done;

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
              name={"dave"}
              emotion={allLevelDone ? "happy" : "neutral"}
              alt="Image of Dave"
              text="I hate when products have no descriptions but many images!"
            />
          </div>
          <div className={"col-6"}>
            <div className={"col-12"}>
              <h1>Visual Disabilities</h1>
              <h2>Complete all the Levels to get your first Batch</h2>
            </div>
            <div className={"col-11"}>
              <p>
                People with visual disabilities like Dave can have problems with
                seeing (certain) colors, their field of view might be blurred or
                they have low to no eyesight. But also the usage of beamers in
                light rooms or direct sunlight on the screen can cause visual
                barriers.
              </p>
              <p>
                Usage of assistive devices like screen magnifiers, screen
                readers, speech recognition systems and many more can help
                people with visual disabilites to overcome some of these
                barriers.
              </p>
              <p>
                The following Level will show you how to optimizie websites for
                some of Daves needs.
              </p>
            </div>
          </div>
          <div className={"col-3"}>
            <div className="button-group">
              {/* {console.log(
                " accomplished={" +
                  levelDone(1) +
                  "} primary={ " +
                  !levelDone(1) +
                  "}"
              )} */}
              <Button
                target={"/personas/dave/contrast"}
                accomplished={level1Done}
                primary={!level1Done}
              >
                Color & Contrast
                {level1Done ? (
                  <Image src={checkmark} alt="checkmark-icon" />
                ) : (
                  <Image src={arrowRight} alt="arrow-right-icon" />
                )}
              </Button>
              <Button
                target={"/personas/dave/font"}
                inactive={!level1Done}
                primary={!level2Done}
                accomplished={level2Done}
              >
                Font-Size
                {level2Done ? (
                  <Image src={checkmark} alt="checkmark-icon" />
                ) : (
                  <Image src={arrowRight} alt="arrow-right-icon" />
                )}
              </Button>
              <Button
                target={"/personas/dave/screenreader"}
                inactive={!level2Done}
                primary={!level3Done}
                accomplished={level3Done}
              >
                Screen Reader
                {level3Done ? (
                  <Image src={checkmark} alt="checkmark-icon" />
                ) : (
                  <Image src={arrowRight} alt="arrow-right-icon" />
                )}
              </Button>
              <Button
                target={"/personas/dave/aria"}
                inactive={!level3Done}
                primary={!level4Done}
                accomplished={level4Done}
              >
                Aria
                {level4Done ? (
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
