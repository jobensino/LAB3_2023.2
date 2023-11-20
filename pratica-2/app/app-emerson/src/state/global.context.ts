import { createContext, useContext } from "react";
import { TGlobalRedux } from "./global.types";
import { initialReduxPersonage } from "./personage";

const initialRedux: TGlobalRedux = {
    personage: initialReduxPersonage
}

const GlobalContext = createContext<TGlobalRedux>(initialRedux);
const useGlobalContext = () => useContext(GlobalContext);

export {GlobalContext,useGlobalContext}
 