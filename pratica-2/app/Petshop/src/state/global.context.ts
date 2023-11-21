import { createContext, useContext } from "react";
import { TGlobalRedux } from "./global.types";
import { initialReduxPetshop } from "./petshop";

const initialRedux: TGlobalRedux = {
    petshop: initialReduxPetshop
}

const GlobalContext = createContext<TGlobalRedux>(initialRedux);
const useGlobalContext = () => useContext(GlobalContext);

export {GlobalContext,useGlobalContext}
 