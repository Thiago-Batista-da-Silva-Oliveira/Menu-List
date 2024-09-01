import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: #f7f7f7;
  }
  :root {
    --primary: #f7af1d;
  }
`;