import { createContext, useContext } from "react";
import { TGlobalRedux } from "./global.types";
import { initialReduxDespesa } from "./despesa/despesa.redux";

const initialRedux: TGlobalRedux = {
    despesa: initialReduxDespesa
}

const GlobalContext = createContext<TGlobalRedux>(initialRedux);

const useGlobalContext = () => useContext(GlobalContext);

export {GlobalContext,useGlobalContext}
 