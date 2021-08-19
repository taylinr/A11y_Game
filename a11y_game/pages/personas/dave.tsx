import Head from 'next/head'
import Button from '../../components/Button/Button'
import PersonaSmall from '../../components/PersonaSmall/PersonaSmall'
import Context from '../../components/Context/Context';
import { useContext } from 'react';
import arrowRight from '../../assets/arrow-right.svg'
import checkmark from '../../assets/checkmark.svg'

import Image from 'next/image';

export default function Home() {

    const context = useContext(Context);

    const levelDone = (level: number) => {
        return context.submittedLevel.has(level);
    }

    return (
        <div >
            <Head>
                <title>A11y Game</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main >
                <div className={'col-12 row'}>
                    <div className={'col-3'}>
                        <PersonaSmall
                            target='dave'
                            image='/images/profile.jpg'
                            alt='Image of Dave'
                            text='"I hate when products dont have good descriptions but 25 Images."' />
                        
                    </div>
                    <div className={'col-6'}>
                        <div className={'col-12'}>
                            <h1>Visual Disabilities</h1>
                            <h2>Complete all the Levels to get your first Batch</h2>
                        </div>
                        <div className={'col-11'}>
                            <p>People with Visual Disabilities like Dave can have problems with seeing (certain) colors, their field of view might be blurred or they have low to no eyesight. But also the usage of beamers in light rooms or direct sunlight on the screen can cause visual barriers.</p>
                            <p>Usage of Assistive Devices like Screen magnifiers, screen Readers, speech recognition Systems and many more can help People with visual disabilites to overcome some of these barriers.</p>
                            <p>The following Level will show you how to optimizie websites for some of Daves needs.</p>
                        </div>
                    </div>
                    <div className={'col-3'}>
                        <div className='button-group'>
                            <Button target={'/personas/dave/contrast'} primary={!levelDone(1)} accomplished={levelDone(1)}>
                                Color & Contrast
                                 {(levelDone(1))
                                ? <Image src={checkmark} alt="checkmark-icon" />
                                :   <Image src={arrowRight} alt="arrow-right-icon" />}
                            </Button>
                            <Button target={'/personas/dave/font'} inactive={!levelDone(1)} primary={!levelDone(2)} accomplished={levelDone(2)}>
                                Font-Size
                                {(levelDone(2))
                                ? <Image src={checkmark} alt="checkmark-icon" />
                                :   <Image src={arrowRight} alt="arrow-right-icon" />}
                            </Button>
                            <Button target={'/personas/dave/screenreader'} inactive ={!levelDone(2)} primary={!levelDone(3)} accomplished={levelDone(3)}>
                                Screen Reader
                               {(levelDone(3))
                                ? <Image src={checkmark} alt="checkmark-icon" />
                                :   <Image src={arrowRight} alt="arrow-right-icon" />}
                            </Button>
                            <Button target={'/personas/dave/aria'} inactive ={!levelDone(3)} primary={!levelDone(4)} accomplished={levelDone(4)}>
                                Aria
                                {(levelDone(4))
                                ? <Image src={checkmark} alt="checkmark-icon" />
                                :   <Image src={arrowRight} alt="arrow-right-icon" />}
                            </Button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}