
import { createGlobalStyle, css } from 'styled-components'

const GlobalStyle = createGlobalStyle`


    html,
    body {
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    * {
        box-sizing: border-box;
    }

    /* For mobile phones: */
    [class*="col-"] {
        width: 100%;
        float: left;
    }

    @media only screen and (min-width: 768px) {
    /* For desktop: */
        .col-1 {width: 8.33%;}
        .col-2 {width: 16.66%;}
        .col-3 {width: 25%;}
        .col-4 {width: 33.33%;}
        .col-5 {width: 41.66%;}
        .col-6 {width: 50%;}
        .col-7 {width: 58.33%;}
        .col-8 {width: 66.66%;}
        .col-9 {width: 75%;}
        .col-10 {width: 83.33%;}
        .col-11 {width: 91.66%;}
        .col-12 {width: 100%;}

        .center-horizontal {
            align-items: center;
            display: flex;
        }
    }

    .row::after {
        content: "";
        clear: both;
        display: table;
    }

    .container {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }

    main {
        padding: 0 5rem 2rem 5rem;
        max-width: 1200px;
        margin-left: auto;
        margin-right: auto;
    }

    h1, h2, h3, h4 {
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
    }

    h1 {
        font-size: 3em;
    }

    h2 {
        font-size: 2em;
    }

    p {
        font-family: 'Roboto', sans-serif;
        max-width: 602px;
    }

`
export default GlobalStyle

