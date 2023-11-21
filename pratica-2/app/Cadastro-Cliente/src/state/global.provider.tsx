import React,{useReducer} from 'react';
import { GlobalContext } from './global.context';
import { reducerPlayer, reduxPlayer } from './player';

interface ProviderProps  {
    children?: React.ReactNode | React.ReactNode[]
}

const GlobalProvider:React.FC<ProviderProps> = ({children}) => {

    const [statePlayer,dispatchPlayer] = useReducer(reducerPlayer.reducer,reducerPlayer.initialState());
    
    const reduxes = {
        player: reduxPlayer(statePlayer,dispatchPlayer),
    }

    return (
        <GlobalContext.Provider value={reduxes} >
            {children}
        </GlobalContext.Provider>
    )
}

export {GlobalProvider};