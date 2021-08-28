import styled, { css } from "styled-components";

const SelectStyles = styled.div`
  float: left;

  * {
    float: left;
  }

  p {
    max-width: 100%;
    margin-bottom: initial;
  }

  div select {
    font-size: 1em;
    float: left;
    /* margin: ${({ theme }) => 0 + " " + theme.baseSpace * 1 + "px"}; */
    display: flex;
    justify-content: space-between;
    border: ${({ theme }) => "1px solid " + theme.primary};
    padding: ${({ theme }) =>
      theme.baseSpace * 1 + "px " + theme.baseSpace * 1 + "px"};
    border-radius: ${({ theme }) => theme.baseSpace * 1.5 + "px"};
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.white};
    box-shadow: ${({ theme }) => theme.boxShadow};
    cursor: pointer;

    :hover {
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    }
  }
`;
export default SelectStyles;
