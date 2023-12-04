import { createContext, useContext } from "react";
import { TGlobalRedux } from "./global.types";

const initialRedux: TGlobalRedux = {
    empty: {}
}

const GlobalContext = createContext<TGlobalRedux>(initialRedux);
const useGlobalContext = () => useContext(GlobalContext);

export {GlobalContext,useGlobalContext}
 