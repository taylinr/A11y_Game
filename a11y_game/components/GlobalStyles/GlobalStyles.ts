
import { createGlobalStyle, css } from 'styled-components'

const GlobalStyle = createGlobalStyle`

    html,
    body {
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    }

    .circles {
        overflow: hidden;
        position: relative;
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

        .circles:before {
            content: "";
            display: block;
            z-index: -3;
            position: absolute;
            left: -250px;
            bottom: -250px;
            height: 40em;
            width: 40em;
            border-radius: 30em;
            background-color: #E6F0F5;
            animation: bounce-1 25s ease-in-out 1s infinite alternate;
            
        }

        .circles:after {
            content: "";
            display: block;
            z-index: -3;
            position: absolute;
            right: -250px;
            top: -250px;
            height: 30em;
            width: 30em;
            border-radius: 30em;
            background-color: #dce6eb;
            animation: bounce-2 20s ease-in-out 0s infinite alternate;
        }

        main:before{
            content: "";
            display: block;
            z-index: -3;
            position: absolute;
            left: 15px;
            bottom: 350px;
            height: 10em;
            width: 10em;
            border-radius: 30em;
            background-color: #dce6eb;
            animation: bounce-3 20s ease-in-out 0s infinite alternate;
        }

        main:after {
            content: "";
            display: block;
            z-index: -3;
            position: absolute;
            right: 15px;
            top: 250px;
            height: 10em;
            width: 10em;
            border-radius: 30em;
            background-color: #E6F0F5;
            animation: bounce-3 20s ease-in-out 0s infinite alternate;
        }

        @keyframes bounce-1 {
            0% {
                transform: translate(0, 0);
            }
            50% {
                transform: translate(100px, 20px);
                width: 35em;
                height: 35em;
            }
            100% {
                transform: translate(0, 0);
            }
        }

        @keyframes bounce-2 {
            0% {
                transform: translate(0, 0);
            }
            25% {
                transform: translate(10px, -30px);
            }
            50% {
                transform: translate(-10px, 20px);
            }
            100% {
                transform: translate(0, 0);
            }
        }

        @keyframes bounce-3 {
            0% {
                transform: translate(0, 0);
            }
            50% {
                transform: translate(50px, 20px);
            }
            100% {
                transform: translate(0, 0);
            }
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
        min-height: calc(100vh - 110px);
    }

    h1, h2, h3, h4 {
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
    }

    h1 {
        margin-top: 0.2em;
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

