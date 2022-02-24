import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Roboto', sans-serif;
    font-weight: normal;
  }
  
  :root{
    --backgroundMain: var(linear-gradient(
    to bottom right,
    rgb(68, 196, 249, 100%),
    rgb(31, 96, 203, 100%)
  ));
  }

`;
