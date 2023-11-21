import { reducerPetshop } from "./petshop.reducer";
import { TActionPetshop, TStatePetshop, TReduxPetshop } from "./petshop.types";

const initialReduxPetshop:TReduxPetshop={
    state: reducerPetshop.initialState(),
    add: (_owner,_item,_ds)=>{}, 
    load:  (_owner,_ds)=>{}, 
}

function reduxPetshop(state:TStatePetshop,dispatch:React.Dispatch<TActionPetshop>):TReduxPetshop{

    const redux: TReduxPetshop = {   
        state: state,
        add: (owner,item,ds,callback) => {
            dispatch({type: 'add_petshop', 
                      payload:{
                          owner: owner,
                          event: 'add_petshop',
                          action: 'insert',
                          item : item,
                          ds : ds,
                          callback: callback
                      }})
        },  
        load:  (owner,ds,callback) => {
            dispatch({type: 'load_petshop', 
                      payload:{
                          owner: owner,
                          event: 'load_petshop',
                          action: 'load',
                          ds : ds,
                          callback: callback
                      }})
        },
    }

    return redux;
}

export {initialReduxPetshop,reduxPetshop}
