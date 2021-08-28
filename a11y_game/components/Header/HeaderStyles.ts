import styled, { css } from "styled-components";

interface Props {}

const HeaderStyles = styled.div<Props>`
  max-width: 1200px;
  margin: 10px auto 10px auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
`;
export default HeaderStyles;
