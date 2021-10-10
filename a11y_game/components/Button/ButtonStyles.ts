import styled, { css } from "styled-components";

interface Props {
  primary?: boolean;
  secondary?: boolean;
  inactive?: boolean;
  accomplished?: boolean;
  help?: boolean;
}

const ButtonStyles = styled.button<Props>`
  width: ${({ help }) => (help ? "auto" : "100%")};
  position: ${({ help }) => (help ? "absolute" : "unset")};
  right: 0;
  top: 0;
  z-index: ${({ help }) => (help ? 999 : 1)};
  margin: ${({ theme, help }) =>
    help ? "0 1em 0 0" : theme.baseSpace * 2 + "px 0"};
  display: flex;
  justify-content: space-between;
  border: ${({ theme, inactive }) =>
    inactive ? "1px solid" + theme.primary : "none"};
  padding: ${({ theme, help }) =>
    help
      ? theme.baseSpace * 1.5 + "px " + theme.baseSpace * 2 + "px"
      : theme.baseSpace * 2 + "px"};
  border-radius: ${({ theme }) => theme.baseSpace * 1.5 + "px"};
  color: ${({ theme, primary, accomplished }) =>
    accomplished || primary ? theme.white : theme.primary};
  background-color: ${({ theme, primary, secondary, inactive, accomplished }) =>
    primary
      ? theme.primary
      : secondary
      ? theme.lightgrey
      : accomplished
      ? theme.green
      : inactive
      ? theme.white
      : theme.primary};
  box-shadow: ${({ theme, inactive }) => (inactive ? "none" : theme.boxShadow)};
  cursor: ${({ inactive }) => (inactive ? "default" : "pointer")};

  font-size: 1.2em;

  @media only screen and (min-width: 768px) {
    font-size: 1em;
    margin: ${({ theme, help }) =>
      help ? "0 4em 0 0" : theme.baseSpace * 2 + "px 0"};
  }

  :hover {
    box-shadow: ${({ inactive }) =>
      inactive
        ? "none"
        : "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)"};
  }
`;
export default ButtonStyles;
