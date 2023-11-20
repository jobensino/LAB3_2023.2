import { reducerPersonage } from "./personage.reducer";
import { TActionPersonage, TStatePersonage, TReduxPersonage } from "./personage.types";

const initialReduxPersonage:TReduxPersonage={
    state: reducerPersonage.initialState(),
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    add: (_owner,_item,_ds)=>{}, 
    load:  (_owner,_ds)=>{}, 
}

function reduxPersonage(state:TStatePersonage,dispatch:React.Dispatch<TActionPersonage>):TReduxPersonage{

    const redux: TReduxPersonage = {   
        state: state,
        add: (owner,item,ds,callback) => {
            dispatch({type: 'add_personage', 
                      payload:{
                          owner: owner,
                          event: 'add_personage',
                          action: 'insert',
                          item : item,
                          ds : ds,
                          callback: callback
                      }})
        },  
        load:  (owner,ds,callback) => {
            dispatch({type: 'load_personage', 
                      payload:{
                          owner: owner,
                          event: 'load_personage',
                          action: 'load',
                          ds : ds,
                          callback: callback
                      }})
        },
    }

    return redux;
}

export {initialReduxPersonage,reduxPersonage}
