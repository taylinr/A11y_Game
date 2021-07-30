import Head from 'next/head'
import Button from '../components/Button/Button'
import CodeEditor from '../components/CodeEditor/CodeEditor'
import Persona from '../components/Persona/Persona'

export default function Home() {
    return (
        <div >
            <Head>
                <title>A11y Game</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main >
                <div className={'persona__header row col-12 center-horizontal'}>
                    <div className={'col-9'}>
                        <h1>We will use your website</h1>
                        <h2>Make it accessible to us!</h2>
                    </div>
                    <div className={'col-3'}>
                        <Button target={'/personas/Dave'} primary={true}>
                            Help Dave
                            <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.37114e-07 7.5L14.17 7.5L10.59 11.09L12 12.5L18 6.5L12 0.499999L10.59 1.91L14.17 5.5L6.11959e-07 5.5L4.37114e-07 7.5Z" fill="#ffffff"/>
                            </svg>
                        </Button>
                    </div>
                </div>
                

                <div className={'row col-12'}>
                    <Persona
                        image='/images/profile.jpg'
                        alt='Image of Dave'
                        disability='Visual Disability'
                        name='Dave'
                        age={25}
                        pronouns='He / Him'
                        text='"I hate when products dont have good descriptions but 25 Images."' />
                    <Persona
                        image='/images/profile.jpg'
                        alt='image of Clara'
                        disability='Auditory Disability'
                        name='Clara'
                        age={42}
                        pronouns='She / Her'
                        text='"Social Media is great, but all these Storys and Clips without subtitles drive me nuts!"'/>
                    <Persona
                        image='/images/profile.jpg'
                        alt='image of Alex'
                        disability='Cognitive Disability'
                        name='Alex'
                        age={34}
                        pronouns='They / Them'
                        text='"Online-Newspaper articles shouldnt riquire a masters-degree to be readable"' />
                    <Persona
                        image='/images/profile.jpg'
                        alt='image of Semiha'
                        disability='Motor Disability'
                        name='Semiha'
                        age={73}
                        pronouns='She / Her'
                        text='"Online shopping with Keyboard-only is hard, but physical shops arent accessible either"' />
                </div>
            </main>
        </div>
    )
}