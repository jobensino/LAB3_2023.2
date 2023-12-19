import { Livro } from "entities/Livro";
import { createReducerContext } from "hooks/createReducerContext";
import { initialState, reducer } from "../reducer";
import { TActions } from "hooks/createReducerContext/actions";
import { LivroController } from "csr/controllers/LivroController";
import { IStateProps } from "hooks/createReducerContext/types";


const [LivroProvider, useLivroContext2] = createReducerContext<Livro, TActions<Livro>>({
    reducer,
    initialState
});


function useLivroContext(componente: string)
    : [ IStateProps<Livro> ,LivroController] {

    const {state, dispatch}= useLivroContext2("Form");

    const controller = new LivroController(dispatch);

    return [state, controller];
}

export {
    LivroProvider,
    useLivroContext,
    useLivroContext2
}