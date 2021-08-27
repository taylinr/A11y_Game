import styled, { css } from "styled-components";

interface Props {}

const FormStyles = styled.div<Props>`
  .headline {
    width: 150px;
    display: inline-block;
    background-color: ${({ theme }) => theme.lightgrey};
    border: none;
    border-radius: ${({ theme }) =>
      theme.baseSpace * 1.5 + "px " + theme.baseSpace * 1.5 + "px 0 0"};
    padding: ${({ theme }) => theme.baseSpace + "px"};
    box-shadow: ${({ theme }) => theme.boxShadow};
    cursor: pointer;
    text-align: center;
    color: ${({ theme }) => theme.primary};
    box-shadow: none;
    cursor: unset;
  }

  .output {
    padding-left: ${({ theme }) => theme.baseSpace * 0.5 + "px"};
  }

  .editor__wrapper {
    padding-right: ${({ theme }) => theme.baseSpace * 0.5 + "px"};
  }

  .editor {
    min-height: 450px;
    max-width: 100%;
    padding: 0 35px 25px;
    background-color: ${({ theme }) => theme.lightgrey};
    overflow-y: auto;
    border-radius: ${({ theme }) =>
      "0 " +
      theme.baseSpace * 1.5 +
      "px " +
      theme.baseSpace * 1.5 +
      "px " +
      theme.baseSpace * 1.5 +
      "px "};
  }
`;
export default FormStyles;
