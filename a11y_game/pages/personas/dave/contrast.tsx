import Head from "next/head";
import ColorContrastChecker from "../../../components/Level/ColorContrastChecker";
import PersonaSmall from "../../../components/PersonaSmall/PersonaSmall";
export default function Home() {
  return (
    <div>
      <Head>
        <title>A11y Game</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="col-12 row ">
          <div className="col-6">
            <h1>Color & Contrast</h1>
            <p>
              Change the Text and Background Color Contrast to be accessible.
              The higher the contrast ratio the better!
            </p>
          </div>
          <div className="col-6">
            {/* <PersonaSmall
                            target='dave'
                            image='/images/profile.jpg'
                            alt='Image of Dave'
                            text='"I hate when products dont have good descriptions but 25 Images."' /> */}
          </div>
        </div>
        <ColorContrastChecker />
      </main>
    </div>
  );
}
