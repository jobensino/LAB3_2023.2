import React from "react";
import { GlobalStyle } from './util/global';
import { GlobalProvider } from "state/global.provider";

import { Tela } from "./Cadastro/telaInicio";

const App:React.FC = () => {
    
  return (
    <>
        <GlobalStyle bg='#333332' />
        
        <GlobalProvider>            
            <Tela></Tela>
            
        </GlobalProvider>
    </>

  )
}


export {App}