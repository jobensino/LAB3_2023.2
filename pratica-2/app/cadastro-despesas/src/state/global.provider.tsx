import React,{useReducer} from 'react';
import { GlobalContext } from './global.context';
import { reducerDespesa, reduxDespesa } from './despesa';

interface ProviderProps  {
    children?: React.ReactNode | React.ReactNode[]
}

const GlobalProvider:React.FC<ProviderProps> = ({children}) => {

    const [stateDespesa,dispatchDespesa] = useReducer(reducerDespesa.reducer,reducerDespesa.initialState());
    
    const reduxes = {
        despesa: reduxDespesa(stateDespesa,dispatchDespesa),
    }

    return (
        <GlobalContext.Provider value={reduxes} >
            {children}
        </GlobalContext.Provider>
    )
}

export {GlobalProvider};