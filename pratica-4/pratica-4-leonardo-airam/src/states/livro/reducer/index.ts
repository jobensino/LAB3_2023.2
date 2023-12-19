
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
            return{
                ...prevState,
                item: action.payload.item,
            }
            break;

        case ActionsType.LIST_ALL:
            return {
                ...initialState,
                items: action.payload.items,
            }
            break;

        case ActionsType.ERROR:
            return {
                ...prevState,
                hasError: true,
                message: action.payload.message
            }
            break;

        case ActionsType.SUCESS:
            return {
                ...prevState,
                hasError: false,
                message: action.payload.message
            }
            break;

        default:
            return prevState;
            break;
    }
}

export {
    initialState,
    reducer,
}