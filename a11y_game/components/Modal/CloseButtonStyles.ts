import styled, { css } from "styled-components";

interface Props {}

const CloseButtonStyles = styled.button<Props>`
  width: 46px;
  height: 46px;
  margin: 0;
  padding: 0;
  text-align: center;
  border: none;
  border-radius: 50%;
  box-shadow: ${({ theme }) => theme.boxShadow};
  cursor: pointer;
  float: right;
  position: absolute;
  right: 3em;
  top: 3em;
  background-color: ${({ theme }) => theme.primary};

  :hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }
`;
export default CloseButtonStyles;
