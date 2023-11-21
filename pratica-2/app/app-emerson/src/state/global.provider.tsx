import React,{useReducer} from 'react';
import { GlobalContext } from './global.context';
import { reducerPersonage, reduxPersonage } from './personage';

interface ProviderProps  {
    children?: React.ReactNode | React.ReactNode[]
}

const GlobalProvider:React.FC<ProviderProps> = ({children}) => {

    const [statePlayer,dispatchPlayer] = useReducer(reducerPersonage.reducer,reducerPersonage.initialState());
    
    const reduxes = {
        personage: reduxPersonage(statePlayer,dispatchPlayer),
    }

    return (
        <GlobalContext.Provider value={reduxes} >
            {children}
        </GlobalContext.Provider>
    )
}

export {GlobalProvider};