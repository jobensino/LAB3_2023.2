import React from "react";
import { Test } from "./test";
import { createGlobalStyle } from "styled-components";

const App:React.FC = () => {

  return (
    <>
      <GlobalStyle />
      <Test />
    </>
  )
}

const GlobalStyle = createGlobalStyle`

    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
        
    }

    :root {
      font-size: 1.2rem;     
    }
 
`;

export default App
