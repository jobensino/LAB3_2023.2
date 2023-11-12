import { reducerDespesa } from "./despesa.reducer";
import { TActionDespesa, TStateDespesa, TReduxDespesa } from "./despesa.types";

const initialReduxDespesa:TReduxDespesa={
    state: reducerDespesa.initialState(),
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    add: (_owner,_item,_ds)=>{}, 
    load:  (_owner,_ds)=>{}, 
}

function reduxDespesa(state:TStateDespesa,dispatch:React.Dispatch<TActionDespesa>):TReduxDespesa{

    const redux: TReduxDespesa = {   
        state: state,
        add: (owner,item,ds,callback) => {
            dispatch({type: 'add_score', 
                      payload:{
                          owner: owner,
                          event: 'add_score',
                          action: 'insert',
                          item : item,
                          ds : ds,
                          callback: callback
                      }})
        },  
        load:  (owner,ds,callback) => {
            dispatch({type: 'load_score', 
                      payload:{
                          owner: owner,
                          event: 'load_score',
                          action: 'load',
                          ds : ds,
                          callback: callback
                      }})
        },
    }

    return redux;
}

export {initialReduxDespesa,reduxDespesa}
