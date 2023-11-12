import { DespesaAttr } from "model/despesa.model";
import { TActionDespesa,TStateDespesa } from "./despesa.types";
//import { loadScore } from "src/hooks/useScoreStore";

//const items = await loadScore();

const initialState  = () : TStateDespesa=> {
    return ({
        event: 'none',
        action: null,
        items: [],
        curr: null
    })
}

function reducer(state:TStateDespesa,action:TActionDespesa):TStateDespesa {
    
    const {type,payload} = action;
    
    //console.log(state)
    //console.log(action)
    //console.log(payload.action)

    switch (type) {

        case 'add_score': {
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
        case 'load_score': {
            const newState = {...state}
            
            let items:DespesaAttr[] = [];

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

const reducerDespesa = {
    initialState: initialState,
    reducer: reducer
}

export { reducerDespesa };
