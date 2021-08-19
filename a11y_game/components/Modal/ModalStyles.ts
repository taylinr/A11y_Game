import styled, { css } from 'styled-components'


interface Props {
 
}


const ModalStyles = styled.div<Props>`

    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 1050;
    overflow: hidden auto;
    text-align: center;
    background: rgba(59, 107, 118, 0.8);
    cursor: pointer;
    align-items: center;
    justify-content: center;
    display: flex;
`
export default ModalStyles
