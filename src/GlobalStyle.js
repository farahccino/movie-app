import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*,
*::before,
*::after {
    
    box-sizing: border-box;
}

body {
    background-color: hsl(236, 38%, 21%);
    color: white;
    font-family: "Roboto";
    margin: 0 auto;
}


`;
