import styled, { css } from 'styled-components'


interface Props {
 
}


const ProgressBarStyles = styled.div<Props>`

    .RCP {
        margin-left: auto;
        margin-right: auto;
    }

    .indicator {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        flex-direction: column;
        text-align: center;
        position: absolute;
        top: 0;
        width: 100%;
        height: 80%;
        margin: 0 auto;
        font-size: 1em;
        color: ${({ theme }) => (theme.primary)};

        p {
            margin: 0;
        }
        
        .number {
            font-size: 1.8em;
        }
    }
   
`
export default ProgressBarStyles
