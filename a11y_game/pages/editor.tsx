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
                <CodeEditor />
            </main>
        </div>
    )
}