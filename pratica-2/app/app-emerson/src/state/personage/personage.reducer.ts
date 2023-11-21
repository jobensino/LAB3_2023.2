import { PersonageAttr } from "model/personage.model";
import { TActionPersonage,TStatePersonage } from "./personage.types";
//import { loadScore } from "src/hooks/useScoreStore";

//const items = await loadScore();

const initialState  = () : TStatePersonage=> {
    return ({
        event: 'none',
        action: null,
        items: [],
        curr: null
    })
}

function reducer(state:TStatePersonage,action:TActionPersonage):TStatePersonage {
    
    const {type,payload} = action;
    
    //console.log(state)
    //console.log(action)
    //console.log(payload.action)

    switch (type) {

        case 'add_personage': {
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
        case 'load_personage': {
            const newState = {...state}
            
            let items:PersonageAttr[] = [];

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

const reducerPersonage = {
    initialState: initialState,
    reducer: reducer
}

export { reducerPersonage };
