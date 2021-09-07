import styled, { css } from "styled-components";

interface Props {
  level?: string;
  toggleActive?: boolean;
  toggle: boolean;
}

const IframeStyles = styled.div<Props>`
  .switch__wrapper {
    height: ${({ theme }) => theme.baseSpace * 3.9 + "px "};
    float: right;
  }

  iframe,
  div.output-wrapper {
    filter: ${({ toggleActive, level }) =>
      toggleActive
        ? level == "contrast"
          ? "grayscale(1)"
          : level == "fontsize"
          ? "blur(1.3px)"
          : "blur(0)"
        : "grayscale(0)"};
    border: ${({ theme }) => "2px solid " + theme.primary};
    border-radius: ${({ theme }) => theme.baseSpace * 1.5 + "px "};
    min-height: 450px;

    margin-top: ${({ toggle, theme }) =>
      toggle ? "" : theme.baseSpace * 3.9 + "px "};
  }

  div.output-wrapper {
    cursor: none;

    button {
      cursor: none;
    }
  }

  .md_switch {
    display: inline-flex;
    font-family: "Open Sans";
    align-items: center;
    margin: 5px 0;
  }

  .md_switch .md_switch__toggle {
    position: relative;
    cursor: pointer;
  }

  /* default states */

  .md_switch .md_switch__toggle::before,
  .md_switch .md_switch__toggle::after {
    content: "";
    display: block;
    margin: 0 3px;
    transition: all 100ms cubic-bezier(0.4, 0, 0.2, 1);
    background: #bdbdbd;
  }

  .md_switch .md_switch__toggle::before {
    height: 1.3em;
    width: 3em;
    border-radius: 0.65em;
    opacity: 0.6;
  }

  .md_switch .md_switch__toggle::after {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    height: 1.7em;
    width: 1.7em;
    border-radius: 50%;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2), 0 0 2px rgba(0, 0, 0, 0.4);
  }
`;
export default IframeStyles;
