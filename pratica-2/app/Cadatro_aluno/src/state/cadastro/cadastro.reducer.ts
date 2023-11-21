import { CadastroAluno } from "model/cadastro.model";
import { TActionCadastro,TStateCadastro } from "./cadastro.types";


const initialState  = () : TStateCadastro=> {
    return ({
        event: 'none',
        action: null,
        items: [],
        curr: null
    })
}

function reducer(state:TStateCadastro,action:TActionCadastro):TStateCadastro {
    
    const {type,payload} = action;

    switch (type) {

        case 'add_cadastro': {
            const newState = {...state}

            if (payload.item) {

                newState.items = [...newState.items,payload.item];

                if (payload.ds) {
                    payload.ds.insert(payload.item.id.toString(),payload.item);
                }

                if (payload.callback) payload.callback();
            }

            return newState;
        }
        case 'load_cadastro': {
            const newState = {...state}
            
            let items:CadastroAluno[] = [];

            if (payload.ds) {
                payload.ds.load()
                    .then( (arr) => items = [...arr] )
                    .finally( ()=> { 
                        newState.items = [...items]; 
                        if (payload.callback) payload.callback();
                    })
            }            
            
            return newState;
        }

        default: return state;
    }
}

const reducerCadastro = {
    initialState: initialState,
    reducer: reducer
}

export { reducerCadastro };
