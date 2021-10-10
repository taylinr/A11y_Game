import Head from "next/head";
import Button from "../components/Button/Button";
import Persona from "../components/Persona/Persona";
import arrowRight from "../assets/arrow-right.svg";
import Image from "next/image";
import Context from "../components/Context/Context";
import { useContext } from "react";

const Home = () => {
  const context = useContext(Context);

  const points = context.points;

  return (
    <div>
      <Head>
        <title>A11y Game</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={"persona__header row col-12 "}>
          <div className={"col-12"}>
            <h1>Congratulations!</h1>
            <h2>You finished all levels of the A11y Game</h2>
          </div>

          <div className={"row col-12"}>
            <h2>You recieved {points} of 27 Points</h2>
          </div>

          <div className={"row col-12"}>
            <Persona
              target="dave"
              alt="Image of Dave"
              disability="Visual Disability"
              name="Dave"
              age={25}
              pronouns="He / Him"
              text="I hate when products have no descriptions but many images!"
              inactive={true}
              badge={context.badges.get(1)}
              showText={false}
              emotion={"happy"}
            />
            <Persona
              target="clara"
              alt="image of Clara"
              disability="Auditory Disability"
              name="Clara"
              age={42}
              pronouns="She / Her"
              text='"Social Media is great, but all these Storys and Clips without subtitles drive me nuts!"'
              inactive={true}
              badge={context.badges.get(2)}
              showText={false}
              emotion={"happy"}
            />
            <Persona
              target="alex"
              alt="image of Alex"
              disability="Cognitive Disability"
              name="Alex"
              age={34}
              pronouns="They / Them"
              text='"Online-Newspaper articles shouldnt riquire a masters-degree to be readable"'
              inactive={true}
              badge={context.badges.get(3)}
              showText={false}
              emotion={"happy"}
            />
            <Persona
              target="semiha"
              alt="image of Semiha"
              disability="Motor Disability"
              name="Semiha"
              age={73}
              pronouns="She / Her"
              text='"Online shopping with Keyboard-only is hard, but physical shops arent accessible either"'
              inactive={true}
              badge={context.badges.get(4)}
              showText={false}
              emotion={"happy"}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
