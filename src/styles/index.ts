import { createGlobalStyle } from 'styled-components'

export const colors = {
    primary: 'black',
    secondary: 'white',
    tertiary: 'LightGrey',
}

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Inter", sans-serif;
        color: ${colors.secondary};
        text-decoration: none;
    }

    a {
        color: ${colors.tertiary};

        &:hover {
            color: ${colors.secondary};
        }
    }

    ul {
        list-style: none;
    }

    body {
        background-color: ${colors.primary};
    }

    .container {
        max-width: 1024px;
        width: 100%;
        margin: 0 auto;
        padding: 0 16px;
    }

    .x-small {
        font-size: x-small;
    }

    .small, a {
        font-size: small;
    }

    .medium, p {
        font-size: medium;
    }

    .large, h3 {
        font-size: large;
    }
`
