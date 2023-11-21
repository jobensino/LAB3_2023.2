import { createContext, useContext } from "react";
import { TGlobalRedux } from "./global.types";
import { initialReduxCadastro } from "./cadastro";

const initialRedux: TGlobalRedux = {
    cadastro: initialReduxCadastro
}

const GlobalContext = createContext<TGlobalRedux>(initialRedux);
const useGlobalContext = () => useContext(GlobalContext);

export {GlobalContext,useGlobalContext}
 