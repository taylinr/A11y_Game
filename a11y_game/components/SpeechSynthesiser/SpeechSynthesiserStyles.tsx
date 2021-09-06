import styled, { css } from "styled-components";

const ButtonStyles = styled.button`
  width: 90px;
  height: 35px;
  border: none;
  padding: 5px 10px;
  border-radius: ${({ theme }) => theme.baseSpace * 1.5 + "px"};
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.primary};
  box-shadow: ${({ theme }) => theme.boxShadow};
  cursor: pointer;
  font-size: 1em;
  justify-content: space-between;
  align-items: center;
  display: flex;

  :hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }
`;
export default ButtonStyles;
