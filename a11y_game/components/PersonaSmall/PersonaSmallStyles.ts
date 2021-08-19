import styled, { css } from 'styled-components'


interface Props {
 
}


const PersonaStyles = styled.div<Props>`

    padding: 0;
    border: none;
    background-color: transparent;
    width: 240px;

    .persona__wrapper {
        width: 100%;
        padding: 0;
        border-radius: 100%;
        float: left;

    
        img.persona__image {
            border-radius: 50%;
            width: 240px;
            height: auto;
        }

    }
   
  
`
export default PersonaStyles
