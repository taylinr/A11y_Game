import Link from 'next/link'
import BreadcrumbStyles from './BreadcrumbStyles'
import Breadcrumbs from 'nextjs-breadcrumbs';



const Breadcrumb = ({ }) => {

    return (

        <BreadcrumbStyles>
            <Breadcrumbs
                transformLabel={(title) => title.charAt(0).toUpperCase() + title.slice(1) }
                activeItemClassName={'active-item'}
                rootLabel='Home' />
        </BreadcrumbStyles>

    )
    
}

export default Breadcrumb;
