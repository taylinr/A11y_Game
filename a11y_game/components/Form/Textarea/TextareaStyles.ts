import styled, { css } from "styled-components";

const TextareaStyles = styled.div`
  * {
    float: left;
  }

  label {
    width: 100%;
    margin-bottom: 5px;
    margin-top: 5px;
  }

  textarea {
    border: 2px solid #3b6b76;
    border-radius: 15px;
    height: 60px;
    width: 100%;
    font-size: 1.2em;
    padding: 10px 10px;
  }
`;
export default TextareaStyles;
