import styled, { css } from "styled-components";

interface Props {}

const TabsStyles = styled.div<Props>`
  ul.tab__buttons {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .tab__contents {
    height: 450px;
    max-width: 100%;
    background-color: ${({ theme }) => theme.lightgrey};
    overflow-y: auto;
    border-radius: ${({ theme }) =>
      "0 " +
      theme.baseSpace * 1.5 +
      "px " +
      theme.baseSpace * 1.5 +
      "px " +
      theme.baseSpace * 1.5 +
      "px "};
  }
`;
export default TabsStyles;
