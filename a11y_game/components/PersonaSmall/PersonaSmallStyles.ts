import styled, { css } from "styled-components";

interface Props {}

const PersonaStyles = styled.div<Props>`
  padding: 0;
  border: none;
  background-color: transparent;
  width: 240px;

  margin-left: auto;
  margin-right: auto;

  .persona__wrapper {
    width: 100%;
    padding: 0;
    border-radius: 100%;
    float: left;

    img.persona__image {
      width: 240px;
      height: auto;
    }
  }
  .speechbubble__wrapper {
    animation: 0.3s chat 1s;
    animation-fill-mode: forwards;
    transform: scale(0);
    float: left;
    position: relative;
    margin-top: -20px;
    margin-left: -30px;
    margin-right: 30px;
    z-index: 99;
  }

  @keyframes chat {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.15);
    }
    100% {
      transform: scale(1);
    }
  }

  .speechbubble {
    background-color: rgba(220, 230, 235, 0.9);
    color: ${({ theme }) => theme.primary};
    padding: 5px 20px 20px 20px;
    margin-bottom: 75px;
    cursor: default;
    border-radius: 25px;

    p {
      margin: 0;
      text-align: center;
      font-size: 1.1em;
    }
  }

  .speechbubble:before {
    content: "";
    position: relative;
    top: -66px;
    left: 10%;
    width: 0;
    height: 0;
    border: 42px solid transparent;
    border-bottom-color: rgba(220, 230, 235, 0.9);
    border-top: 0;
    border-right: 0;
    margin-left: -21px;
    margin-top: -42px;
  }
`;
export default PersonaStyles;
