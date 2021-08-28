import styled, { css } from "styled-components";

interface Props {
  valid?: boolean;
}

const PersonaStyles = styled.div<Props>`
  padding: 0;
  border: none;
  background-color: transparent;
  width: 240px;
  position: relative;

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
    animation: 0.3s chat 2s;
    animation-fill-mode: forwards;
    transform: scale(0);
    float: left;
    position: absolute;
    right: 95%;
    left: -110%;
    top: 20px;
    z-index: 99;
  }

  .speechbubble:after {
    content: "";
    position: absolute;
    right: 0;
    top: 50%;
    width: 0;
    height: 0;
    border: 44px solid transparent;
    border-left-color: rgba(220, 230, 235, 0.9);
    border-right: 0;
    border-bottom: 0;
    margin-top: -22px;
    margin-right: -43px;
  }

  .speechbubble__contrast__wrapper {
    animation: 0.3s chat 1s;
    animation-fill-mode: forwards;
    transform: scale(0);
    float: left;
    position: absolute;
    right: 100%;
    left: -110%;
    top: 130px;
    z-index: 99;

    .speechbubble:after {
      content: "";
      position: absolute;
      right: 0;
      top: 50%;
      width: 0;
      height: 0;
      border: 44px solid transparent;
      border-left-color: rgba(220, 230, 235, 0.9);
      border-right: 0;
      border-top: 0;
      margin-top: -22px;
      margin-right: -42px;
    }

    p {
      color: ${({ theme, valid }) => (valid ? theme.green : theme.red)};
    }
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
    padding: 15px;
    margin-bottom: 75px;
    cursor: default;
    border-radius: 25px;
    position: relative;

    p {
      margin: 0;
      text-align: center;
      font-size: 1em;
    }
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
export default PersonaStyles;
