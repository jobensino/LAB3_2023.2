import { PlayerScoreAttr } from "model/player.model";
import { TActionPlayer,TStatePlayer } from "./player.types";
//import { loadScore } from "src/hooks/useScoreStore";

//const items = await loadScore();

const initialState  = () : TStatePlayer=> {
    return ({
        event: 'none',
        action: null,
        items: [],
        curr: null
    })
}

function reducer(state:TStatePlayer,action:TActionPlayer):TStatePlayer {
    
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
            
            let items:PlayerScoreAttr[] = [];

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

const reducerPlayer = {
    initialState: initialState,
    reducer: reducer
}

export { reducerPlayer };
