import { Livro } from "entities/Livro";
import { createReducerContext } from "hooks/createReducerContext";
import { initialState, reducer } from "../reducer";
import { TActionsLivro } from "../reducer/actions";


const [LivroProvider, useLivroContext] = createReducerContext<Livro, TActionsLivro>({
    reducer,
    initialState
});

export {
    LivroProvider,
    useLivroContext
}