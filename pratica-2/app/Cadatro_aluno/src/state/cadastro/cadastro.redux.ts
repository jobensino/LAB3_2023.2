import { reducerCadastro } from "./cadastro.reducer";
import { TActionCadastro, TStateCadastro, TReduxCadastro } from "./cadastro.types";

const initialReduxCadastro:TReduxCadastro={
    state: reducerCadastro.initialState(),
    add: (_owner,_item,_ds)=>{}, 
    load:  (_owner,_ds)=>{}, 
}

function reduxCadastro(state:TStateCadastro,dispatch:React.Dispatch<TActionCadastro>):TReduxCadastro{

    const redux: TReduxCadastro = {   
        state: state,
        add: (owner,item,ds,callback) => {
            dispatch({type: 'add_cadastro', 
                      payload:{
                          owner: owner,
                          event: 'add_cadastro',
                          action: 'insert',
                          item : item,
                          ds : ds,
                          callback: callback
                      }})
        },  
        load:  (owner,ds,callback) => {
            dispatch({type: 'load_cadastro', 
                      payload:{
                          owner: owner,
                          event: 'load_cadastro',
                          action: 'load',
                          ds : ds,
                          callback: callback
                      }})
        },
    }

    return redux;
}

export {initialReduxCadastro,reduxCadastro}
