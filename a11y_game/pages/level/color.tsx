import Head from 'next/head'
import ColorContrastChecker from '../../components/ColorContrastChecker/ColorContrastChecker'
export default function Home() {
    return (
        <div >
            <Head>
                <title>A11y Game</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main >
                <div className="col-12 row ">
                    <div className="col-6">
                        <h1>Color & Contrast</h1>
                        <p>Change the Text and Background Color Contrast to be accessible. The higher the contrast ratio the better!</p>
                    </div>
                    <div className="col-6">
                        
                    </div>
                </div>
                <ColorContrastChecker />
            </main>
        </div>
    )
}