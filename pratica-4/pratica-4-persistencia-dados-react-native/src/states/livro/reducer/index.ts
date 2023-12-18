
import { IStateProps, TFunctionReducer } from "hooks/createReducerContext/types";
import { Livro } from "entities/Livro";
import { ActionsType, TActions } from "hooks/createReducerContext/actions";

const initialState: IStateProps<Livro> = {
    items: [],
    item: undefined,
    hasError: false,
    message: ''
}

const reducer: TFunctionReducer<Livro, TActions<Livro>> = (prevState, action) => {
    switch (action.type) {

        case ActionsType.DETAILS:
            return { ...prevState, item: action.payload.item }

        case ActionsType.LIST_ALL:
            return { ...prevState, items: action.payload.items };

        case ActionsType.ERROR:
            return { ...prevState, hasError: true, message: action.payload.message };

        case ActionsType.SUCESS:
            return { ...prevState, hasError: false, message: action.payload.message };

        default:
            return prevState;
    }
}

export {
    initialState,
    reducer,
}