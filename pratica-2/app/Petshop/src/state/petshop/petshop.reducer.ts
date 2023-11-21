import { PetshopCadastro } from "model/petshop.model";
import { TActionPetshop,TStatePetshop } from "./petshop.types";

const initialState  = () : TStatePetshop=> {
    return ({
        event: 'none',
        action: null,
        items: [],
        curr: null
    })
}

function reducer(state:TStatePetshop,action:TActionPetshop):TStatePetshop {
    
    const {type,payload} = action;
    
    switch (type) {

        case 'add_petshop': {
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
        case 'load_petshop': {
            const newState = {...state}
            
            let items:PetshopCadastro[] = [];

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

const reducerPetshop = {
    initialState: initialState,
    reducer: reducer
}

export { reducerPetshop };
