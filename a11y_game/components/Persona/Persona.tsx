import Link from 'next/link'
import Image from 'next/image'
import PersonaStyles from './PersonaStyles'

type PersonaProps = {
    target: string
    alt: string
    image: string
    disability: string
    name: string
    age: number
    pronouns: string
    text: string
}

const Persona = ({target, image, alt, disability, name, age, pronouns, text } : PersonaProps) => {
    return (
        <Link href={'/personas/' + target}>
            <PersonaStyles >
                <div className={'persona__wrapper'}>
                    <Image
                        src={image}
                        height={240}
                        width={240}
                        className={'persona__image'}
                        alt={alt}
                    />
                    <div className={'persona__info-wrapper'}>
                        <p className={'persona__name'}>{name}</p>
                        
                        <p className={'persona__age'}>{age} years old</p>
                        <p className={'persona__pronouns'}>{pronouns}</p>
                        <p className={'persona__disability'}>{disability}</p>
                        <hr />
                        <p className={'persona__text'}>{text}</p>
                    </div>
                </div>

            </PersonaStyles>
        </Link>
    )
}

export default Persona