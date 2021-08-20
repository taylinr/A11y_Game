import styled, { css } from "styled-components";

interface Props {}

const PointsStyles = styled.div<Props>`
  font-size: 1.5em;
  font-weight: normal;
  color: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;

  span {
    margin-left: 15px;
  }
`;
export default PointsStyles;
