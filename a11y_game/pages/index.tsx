import Head from "next/head";
import Button from "../components/Button/Button";
import arrowRight from "../assets/arrow-right.svg";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>A11y Game</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={"col-12 row center-horizontal"}>
          <div className={"intro_text col-9"}>
            <h1>A11y Game</h1>

            <h2>This Game is made for Web Developers</h2>
            <div>
              <p>
                Since Developers often cannot see, feel or hear the difference
                of their code-changes we want to help them by visualizing these
                changes.
              </p>
              <h3>Dive into Accessibility Programming!</h3>
              <p>
                A11y Game is not a comprehensive tutorial on Website
                Accessibility but a great start to learn what is most important
                - keeping accessibility in mind while coding.
              </p>
              <h3>Not a Simulation</h3>
              <p>
                We want to give developers without these disabilities a glimpse
                of which important impact their decisions in coding accessible
                websites have, but we are clearly not able and not trying to
                simulate disabilities.
              </p>
            </div>
          </div>

          <div className={"col-3"}>
            <Button primary={true} target={"/personas"}>
              Get Started
              <Image src={arrowRight} alt="arrow-right-icon" />
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
