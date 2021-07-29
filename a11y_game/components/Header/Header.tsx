import Link from 'next/link'
import HeaderStyles from './HeaderStyles'
import Breadcrumb from '../Breadcrumb/Breadcrumb'

type HeaderProps = {
    

}

export default function Header({}: HeaderProps) {

    return (
            
            <HeaderStyles>
            <Breadcrumb />

            {/* <Points>
            </Points>
             */}
            </HeaderStyles>
    )
    
}
