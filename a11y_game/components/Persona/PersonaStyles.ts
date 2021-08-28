import styled, { css } from "styled-components";

interface Props {
  inactive?: boolean;
}

const PersonaStyles = styled.div<Props>`
  padding: 0 ${({ theme }) => theme.baseSpace * 1.5 + "px"};
  border: none;
  background-color: transparent;
  cursor: ${({ inactive }) => (inactive ? "normal" : "pointer")};
  text-align: center;
  position: relative;
  margin-top: 70px;

  .persona__wrapper {
    color: ${({ theme, inactive }) => (inactive ? theme.primary : theme.white)};

    max-width: 238px;

    margin: ${({ theme }) =>
      theme.baseSpace * 2 + "px auto " + theme.baseSpace * 2 + "px auto"};

    position: relative;

    img.persona__image {
      max-width: 150%;
      height: auto;
    }

    p {
      color: ${({ theme, inactive }) =>
        inactive ? theme.primary : theme.white};
      margin-bottom: 1em;
    }

    .persona__info-wrapper {
      margin-top: -45px;
      background-color: ${({ theme, inactive }) =>
        inactive ? theme.white : theme.primary};

      border: ${({ theme, inactive }) =>
        inactive ? "1px solid " + theme.primary : "none"};

      border-radius: 155px 155px
        ${({ theme }) =>
          theme.baseSpace * 1.5 + "px " + theme.baseSpace * 1.5 + "px"};

      box-shadow: ${({ theme, inactive }) =>
        inactive ? "none" : theme.boxShadow};

      padding: 35px 15px 25px;
      ${({ theme }) =>
        theme.baseSpace * 2 + "px " + theme.baseSpace * 2 + "px "};
      /* min-height: 360px; */

      :hover {
        box-shadow: ${({ inactive }) =>
          inactive
            ? "none"
            : " 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)"};
      }

      p.persona__name {
        font-size: 1.5rem;
        font-weight: bold;
      }

      hr {
        border: 0;
        border-top: ${({ theme, inactive }) =>
          inactive ? "2px solid " + theme.primary : "2px solid " + theme.white};
        width: 80px;
        margin: ${({ theme }) =>
          theme.baseSpace * 4 +
          "px auto " +
          theme.baseSpace * 3 +
          "px" +
          " auto"};
      }

      p.persona__text {
        font-family: "Poppins", sans-serif;
        font-size: 1.1rem;
      }
    }

    .image__wrapper {
      position: relative;
    }

    .badge__wrapper {
      position: absolute;
      bottom: -60px;
      right: 0px;
    }
  }

  .speechbubble__wrapper {
    animation: 0.3s chat 1s;
    animation-fill-mode: forwards;
    transform: scale(0);
    float: left;
    position: absolute;
    top: -55px;
    left: -25px;
    right: 40px;
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
    padding: 15px;
    margin-bottom: 75px;
    cursor: default;
    border-radius: 25px;

    p {
      margin: 0;
      text-align: center;
      font-size: 1em;
    }
  }

  .speechbubble:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 0;
    border: 44px solid transparent;
    border-top-color: rgba(220, 230, 235, 0.9);
    border-bottom: 0;
    border-right: 0;
    margin-left: -55px;
    margin-bottom: 31px;
  }
`;
export default PersonaStyles;
