import styled, { css } from "styled-components";

interface Props {
  primary?: boolean;
  secondary?: boolean;
  inactive?: boolean;
  accomplished?: boolean;
}

const ButtonStyles = styled.button<Props>`
  width: 100%;
  margin: ${({ theme }) => theme.baseSpace * 2 + "px"} 0;
  display: flex;
  justify-content: space-between;
  border: ${({ theme, inactive }) =>
    inactive ? "1px solid" + theme.primary : "none"};
  padding: ${({ theme }) => theme.baseSpace * 2 + "px"};
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
  cursor: ${({ theme, inactive }) => (inactive ? "default" : "pointer")};

  :hover {
    box-shadow: ${({ theme, inactive }) =>
      inactive
        ? "none"
        : "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)"};
  }
`;
export default ButtonStyles;
