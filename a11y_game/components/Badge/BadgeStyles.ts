import styled, { css } from "styled-components";

interface Props {}

const ModalStyles = styled.div<Props>`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 1050;
  overflow: auto;
  text-align: center;
  background: rgba(59, 107, 118, 0.8);
  cursor: pointer;
  align-items: center;
  justify-content: center;
  display: flex;
  padding-top: 600px;
  background-image: url("/images/confetti.gif");
  background-size: cover;
  h1 {
    font-size: 2em;
    color: white;
    font-weight: bold;
    text-align: center;
  }

  @media only screen and (min-width: 768px) {
    padding-top: 0;
  }

  img {
    margin: 100px auto;
    position: relative;
  }
`;
export default ModalStyles;
