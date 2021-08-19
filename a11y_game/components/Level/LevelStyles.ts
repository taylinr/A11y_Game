import styled, { css } from 'styled-components'


interface Props {
    level?: string;
    valid: boolean;
}


const LevelStyles = styled.div<Props>`

    p {
        color: ${({ theme, valid }) => (valid ? theme.green : theme.red)};
        padding: 20px;
        margin: 20px;
        text-align: center;
        
        svg {
            height: auto;
            margin-right: 5px;
        }
    }
   
`
export default LevelStyles
