import { useContext } from "react";
import { SplitLayoutContext } from "./SplitLayoutProvider";

function useSplitLayoutContext(componente: string) {
    const context = useContext(SplitLayoutContext);

    if(context === undefined) {
        throw new Error(`O componente ${componente} não esta dentro do contexto.`)
    }

    return context;
}

export {
    useSplitLayoutContext
}