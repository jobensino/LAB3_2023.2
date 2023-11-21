import { createContext, useContext } from "react";
import { TGlobalRedux } from "./global.types";
import { initialReduxPlayer } from "./player";

const initialRedux: TGlobalRedux = {
    player: initialReduxPlayer
}

const GlobalContext = createContext<TGlobalRedux>(initialRedux);
const useGlobalContext = () => useContext(GlobalContext);

export {GlobalContext,useGlobalContext}
 