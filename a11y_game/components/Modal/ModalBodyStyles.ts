import styled, { css } from 'styled-components'


interface Props {
 
}


const ModalBodyStyles = styled.div<Props>`
    background-color: ${({ theme }) => theme.white};
    margin: auto;
    padding: 3em;
    width: 80%;
    min-height: 400px;
    max-width: 900px;
    outline: 0;
    position: relative;
    border-radius: ${({ theme }) => (theme.baseSpace * 1.5 + 'px ')};
    text-align: left;
   
`
export default ModalBodyStyles
