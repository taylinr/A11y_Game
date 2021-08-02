import Head from 'next/head'
import CodeEditor from '../components/CodeEditor/CodeEditor'

export default function Home() {
    return (
        <div >
            <Head>
                <title>A11y Game</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main >
                <CodeEditor initialHTML="<h1 id='myHeading'>Helloou</h1>" initialCSS="h1 {color: blue};" initialJS="var x = document.getElementById('myHeading'); x.classList.add('hi');"/>
            </main>
        </div>
    )
}