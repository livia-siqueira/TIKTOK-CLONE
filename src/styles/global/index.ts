import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  
  @font-face {
      font-family: 'sofiapro';
      src: url('/sofiapro.ttf') format('truetype');
  }
  body {
    margin:0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
      font-family: sofiapro;
     
  }

  * {
  ::-webkit-scrollbar {
    background-color: transparent;
    width: 0.4rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: gray;
    border-radius: 2rem;
   
  } 
  }
`;

export default GlobalStyle;
