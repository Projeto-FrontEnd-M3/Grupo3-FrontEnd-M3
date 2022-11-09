import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        //Primary Palette
        --color-primary: #00ADB5;
        --color-primary-focus: #AAD8D3;
        --color-primary-negative: #355764;

        //Grey Scale Palette
        --color-white: #ffffff;
        --color-grey-1: #EEEEEE;
        --color-grey-2: #7E8894;
        --color-grey-3: #393E46;

        //Feedback Palette
        --color-success: #C2FFD9;
        --color-error: #Ff4848;
        --color-alert: #FFD371;
    }

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video, input, button{
        background: none;
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        vertical-align: baseline;
        outline: none;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }

    body {
        line-height: 1;
        height: 100vh;
    }

    ol, ul, li {
        list-style: none;
    }

    blockquote, q {
        quotes: none;
    }

    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    *{
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    button, select{
        cursor: pointer;
        border-radius: 4px;
    }
    
    a {
        text-decoration: none;
        color: inherit;
    }

    .filterBackdrop {
        backdrop-filter: blur(2px)
    }

    .nameModal {
        padding: 1rem;
    }

    .App {
        height: 100vh;
    }
`;
