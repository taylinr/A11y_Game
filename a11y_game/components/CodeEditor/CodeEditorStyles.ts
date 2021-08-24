import styled, { css } from "styled-components";

interface Props {
  level?: string;
}

const CodeEditorStyles = styled.div<Props>`
  .editor {
    padding-right: ${({ theme }) => theme.baseSpace * 0.5 + "px"};
  }

  .output {
    padding-left: ${({ theme }) => theme.baseSpace * 0.5 + "px"};
  }
`;
export default CodeEditorStyles;
