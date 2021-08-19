import Head from 'next/head'
import Button from '../components/Button/Button'
import Persona from '../components/Persona/Persona'
import arrowRight from '../assets/arrow-right.svg'
import Image from 'next/image';

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
                        <Button target={'/personas/dave'} primary={true}>
                            Help Dave
                            <Image src={arrowRight} alt="arrow-right-icon" />
                        </Button>
                    </div>
                </div>
                

                <div className={'row col-12'}>
                    <Persona
                        target='dave'
                        image='/images/profile.jpg'
                        alt='Image of Dave'
                        disability='Visual Disability'
                        name='Dave'
                        age={25}
                        pronouns='He / Him'
                        text='"I hate when products dont have good descriptions but 25 Images."' />
                    <Persona
                        target='clara'
                        image='/images/profile.jpg'
                        alt='image of Clara'
                        disability='Auditory Disability'
                        name='Clara'
                        age={42}
                        pronouns='She / Her'
                        text='"Social Media is great, but all these Storys and Clips without subtitles drive me nuts!"'/>
                    <Persona
                        target='alex'
                        image='/images/profile.jpg'
                        alt='image of Alex'
                        disability='Cognitive Disability'
                        name='Alex'
                        age={34}
                        pronouns='They / Them'
                        text='"Online-Newspaper articles shouldnt riquire a masters-degree to be readable"' />
                    <Persona
                        target='semiha'
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