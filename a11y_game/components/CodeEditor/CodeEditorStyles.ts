import styled, { css } from 'styled-components'


interface Props {
 level?: string
}


const CodeEditorStyles = styled.div<Props>`

    .editor {
        padding-right: ${({ theme }) => (theme.baseSpace + "px")};     
       
    }

    .output {
        padding-left: ${({ theme }) => (theme.baseSpace + "px")};
        margin-top: ${({ theme }) => (theme.baseSpace * 3.5 + "px")};

        iframe {
            border: ${({ theme }) => ("1px solid " + theme.primary)};
            border-radius:  ${({ theme }) => (theme.baseSpace * 1.5 + 'px ')};
            min-height: 500px;
        }
    }
   
`
export default CodeEditorStyles
