import styled, { css } from 'styled-components'


interface Props {
 
}


const PersonaStyles = styled.button<Props>`

    margin: 0 ${({ theme }) => (theme.baseSpace + 'px')};
    padding: 0;
    border: none;
    background-color: transparent;
    width: 240px;
    cursor: pointer;

    .persona__wrapper {
        width: 100%;
        background-color: ${({ theme }) => (theme.primary)};
        padding: 0;
        border-radius:  155px 155px ${({ theme }) => (theme.baseSpace * 1.5 + 'px ' + theme.baseSpace * 1.5 + 'px')};
        float: left;
        box-shadow: ${({ theme }) => (theme.boxShadow)};
        margin: ${({ theme }) => (theme.baseSpace * 2 + 'px')} 0;

        :hover {
            box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
        }
    
        img.persona__image {
            border-radius: 50%;
            width: 240px;
            height: auto;
        }

        p {
            color: ${({ theme }) => (theme.white)}
        }

        .persona__info-wrapper {
            padding: 0 ${({ theme }) => (theme.baseSpace * 2  + 'px ') };
            min-height: 360px;
            
            p.persona__name {
                font-size: 1.5rem;
                font-weight: bold;
            }

            hr {
                width: 80px;
                margin: ${({ theme }) => (theme.baseSpace * 4 + 'px auto ' + theme.baseSpace * 3 + 'px' +' auto' ) } ;
            }

            p.persona__text {
                font-family: 'Poppins', sans-serif;
                font-size: 1.1rem;
            }
        }
    }
   
  
`
export default PersonaStyles
