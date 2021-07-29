import Link from 'next/link'
import BreadcrumbStyles from './BreadcrumbStyles'
import Breadcrumbs from 'nextjs-breadcrumbs';



export default function Breadcrumb({ }) {

    return (

        <BreadcrumbStyles>
            <Breadcrumbs
                transformLabel={(title) => title.charAt(0).toUpperCase() + title.slice(1) }
                activeItemClassName={'active-item'}
                rootLabel='Home' />
        </BreadcrumbStyles>

    )
    
}
