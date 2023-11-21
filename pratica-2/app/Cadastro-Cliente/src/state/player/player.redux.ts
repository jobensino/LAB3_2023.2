import { reducerPlayer } from "./player.reducer";
import { TActionPlayer, TStatePlayer, TReduxPlayer } from "./player.types";

const initialReduxPlayer:TReduxPlayer={
    state: reducerPlayer.initialState(),
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    add: (_owner,_item,_ds)=>{}, 
    load:  (_owner,_ds)=>{}, 
}

function reduxPlayer(state:TStatePlayer,dispatch:React.Dispatch<TActionPlayer>):TReduxPlayer{

    const redux: TReduxPlayer = {   
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

export {initialReduxPlayer,reduxPlayer}
