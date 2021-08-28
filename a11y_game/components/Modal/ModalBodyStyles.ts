import styled, { css } from "styled-components";

interface Props {}

const ModalBodyStyles = styled.div<Props>`
  background-color: ${({ theme }) => theme.white};
  margin: 100px auto;
  padding: 2em;
  width: 90%;
  min-height: 400px;
  max-width: 1000px;
  outline: 0;
  position: relative;
  border-radius: ${({ theme }) => theme.baseSpace * 1.5 + "px "};
  text-align: left;

  h2 {
    margin-top: 15px;
  }

  p {
    max-width: 100%;
  }
`;
export default ModalBodyStyles;
