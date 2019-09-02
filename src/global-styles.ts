import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    ${reset};
    * {
        box-sizing: border-box;
    }
    body{
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, 'Qwigley';
        font-size: 12px;
        font-weight: 0
    }
    a{ 
        color:inherit;
        text-decoration:none;
    }
    h1,h2,h3,h4,h5,h6{
        font-family: 'Maven Pro', sans-serif;
    }

    `;

export default GlobalStyles;
