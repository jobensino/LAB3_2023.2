import React,{useReducer} from 'react';
import { GlobalContext } from './global.context';
import { reducerCadastro, reduxCadastro } from './cadastro';

interface ProviderProps  {
    children?: React.ReactNode | React.ReactNode[]
}

const GlobalProvider:React.FC<ProviderProps> = ({children}) => {

    const [stateCadastro,dispatchPlayer] = useReducer(reducerCadastro.reducer,reducerCadastro.initialState());
    
    const reduxes = {
        cadastro: reduxCadastro(stateCadastro,dispatchPlayer),
    }

    return (
        <GlobalContext.Provider value={reduxes} >
            {children}
        </GlobalContext.Provider>
    )
}

export {GlobalProvider};