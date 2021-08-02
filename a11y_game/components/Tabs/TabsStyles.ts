import styled, { css } from 'styled-components'


interface Props {
}


const TabsStyles = styled.div<Props>`

.tab__contents{
    height: 500px;
    max-width: 100%;
    background-color: ${({ theme }) => (theme.lightgrey)};
    overflow-y: auto;
    border-radius:  ${({ theme }) => ('0 '+ theme.baseSpace * 1.5 + 'px ' + theme.baseSpace * 1.5 + 'px ' + theme.baseSpace * 1.5 + 'px ')};
}


  
`
export default TabsStyles
