import React from "react";
import { GlobalStyle } from './util/global';
import { GlobalProvider } from "state/global.provider";
import { Home } from "./pages/home";

const App:React.FC = () => {
    
  return (
    <>
        <GlobalStyle bg='#333332' />
        
        <GlobalProvider>            
            <Home />
        </GlobalProvider>
    </>

  )
}


export {App}