import Link from 'next/link'
import ButtonStyles from './ButtonStyles'

type ButtonProps = {
    children: any
    target: string
    primary?: boolean
    secondary?: boolean
    accomplished?: boolean
    inactive?: boolean
}

export default function Button({ children, target, primary, secondary, accomplished, inactive}: ButtonProps) {

    return (
        <Link href={target} >
            <a>
                <ButtonStyles
                    primary={primary}
                    secondary={secondary}
                    accomplished={accomplished}
                    inactive={inactive}
                >
                    {children}
                </ButtonStyles>
            </a>
        </Link>
    )
    
}
