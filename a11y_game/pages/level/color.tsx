import Head from 'next/head'
import CodeEditor from '../../components/CodeEditor/CodeEditor'

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
                <CodeEditor initialHTML="<h1 id='myHeading'>Helloou</h1>" initialCSS="h1 {color: blue};" initialJS="var x = document.getElementById('myHeading'); x.classList.add('hi');" level='color'/>
            </main>
        </div>
    )
}