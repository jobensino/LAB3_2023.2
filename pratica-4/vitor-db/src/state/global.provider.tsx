import React from 'react';
import { GlobalContext } from './global.context';

interface ProviderProps  {
    children?: React.ReactNode | React.ReactNode[]
}

const GlobalProvider:React.FC<ProviderProps> = ({children}) => {
    
    const reduxes = {
        empty: {},
    }

    return (
        <GlobalContext.Provider value={reduxes} >
            {children}
        </GlobalContext.Provider>
    )
}

export {GlobalProvider};