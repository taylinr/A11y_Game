import Head from "next/head";
import Button from "../components/Button/Button";
import Persona from "../components/Persona/Persona";
import arrowRight from "../assets/arrow-right.svg";
import dave from "../assets/dave_head.png";
import Image from "next/image";
import Context from "../components/Context/Context";
import { useContext } from "react";

export default function Home() {
  const context = useContext(Context);

  const levelDone = (level: number) => {
    return context.submittedLevel.has(level);
  };

  const allLevelDone1 =
    levelDone(1) && levelDone(2) && levelDone(3) && levelDone(4);
  const allLevelDone2 = levelDone(5) && levelDone(6);
  const allLevelDone3 = levelDone(7) && levelDone(8);
  const allLevelDone4 = levelDone(9);

  return (
    <div>
      <Head>
        <title>A11y Game</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={"persona__header row col-12 center-horizontal"}>
          <div className={"col-9"}>
            <h1>We will use your website</h1>
            <h2>Make it accessible to us!</h2>
          </div>
          <div className={"col-3"}>
            <Button
              target={
                "/personas/" +
                (levelDone(1)
                  ? "clara"
                  : levelDone(2)
                  ? "alex"
                  : levelDone(3)
                  ? "semiha"
                  : "dave")
              }
              primary={true}
            >
              Help
              {levelDone(1)
                ? " Clara"
                : levelDone(2)
                ? " Alex"
                : levelDone(3)
                ? " Semiha"
                : " Dave"}
              <Image src={arrowRight} alt="arrow-right-icon" />
            </Button>
          </div>
        </div>

        <div className={"row col-12"}>
          <Persona
            target="dave"
            image="/images/dave_head.png"
            alt="Image of Dave"
            disability="Visual Disability"
            name="Dave"
            age={25}
            pronouns="He / Him"
            text="I hate when products have no descriptions but many images!"
            batch={context.batches.get(1)}
            showText={
              !(levelDone(1) && levelDone(2) && levelDone(3) && levelDone(4))
            }
            emotion={allLevelDone1 ? "happy" : "neutral"}
          />
          <Persona
            target="clara"
            image="/images/profile.jpg"
            alt="image of Clara"
            disability="Auditory Disability"
            name="Clara"
            age={42}
            pronouns="She / Her"
            text='"Social Media is great, but all these Storys and Clips without subtitles drive me nuts!"'
            inactive={!levelDone(4)}
            batch={context.batches.get(2)}
            showText={
              levelDone(1) &&
              levelDone(2) &&
              levelDone(3) &&
              levelDone(4) &&
              !levelDone(5) &&
              !levelDone(6)
            }
            emotion={allLevelDone2 ? "happy" : "neutral"}
          />
          <Persona
            target="alex"
            image="/images/profile.jpg"
            alt="image of Alex"
            disability="Cognitive Disability"
            name="Alex"
            age={34}
            pronouns="They / Them"
            text='"Online-Newspaper articles shouldnt riquire a masters-degree to be readable"'
            inactive={!levelDone(6)}
            batch={context.batches.get(3)}
            showText={
              levelDone(1) &&
              levelDone(2) &&
              levelDone(3) &&
              levelDone(4) &&
              levelDone(5) &&
              levelDone(6) &&
              !levelDone(7) &&
              !levelDone(8)
            }
            emotion={allLevelDone3 ? "happy" : "neutral"}
          />
          <Persona
            target="semiha"
            image="/images/profile.jpg"
            alt="image of Semiha"
            disability="Motor Disability"
            name="Semiha"
            age={73}
            pronouns="She / Her"
            text='"Online shopping with Keyboard-only is hard, but physical shops arent accessible either"'
            inactive={!levelDone(8)}
            batch={context.batches.get(4)}
            showText={
              levelDone(1) &&
              levelDone(2) &&
              levelDone(3) &&
              levelDone(4) &&
              levelDone(5) &&
              levelDone(6) &&
              levelDone(7) &&
              levelDone(8) &&
              !levelDone(9)
            }
            emotion={allLevelDone4 ? "happy" : "neutral"}
          />
        </div>
      </main>
    </div>
  );
}
