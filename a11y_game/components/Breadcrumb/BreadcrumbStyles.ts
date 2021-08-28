import styled, { css } from "styled-components";

const BreadcrumbStyles = styled.div`
  font-family: "Poppins", sans-serif;
  color: ${({ theme }) => theme.primary};
  z-index: 9;
  position: relative;

  font-size: 1.2em;

  @media only screen and (min-width: 768px) {
    font-size: 1em;
  }

  ul,
  ol {
    list-style: none;
    padding: 0;

    li {
      display: inline;
      padding-right: 10px;

      a {
        color: ${({ theme }) => theme.primary};
        text-decoration: underline;
      }
    }

    li.active-item a,
    li:last-of-type a {
      font-weight: 500;
      text-decoration: none;
    }

    li:not(:last-of-type)::after {
      padding-left: 10px;
      content: url("data:image/svg+xml,%3Csvg width='8' height='12' viewBox='0 0 8 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.70508 6L1.70508 -2.62268e-07L0.29508 1.41L4.87508 6L0.29508 10.59L1.70508 12L7.70508 6Z' fill='%233b6b76'/%3E%3C/svg%3E%0A");
    }
  }
`;
export default BreadcrumbStyles;
