import React,{useReducer} from 'react';
import { GlobalContext } from './global.context';
import { reducerPetshop, reduxPetshop } from './petshop';
import imgagemEscolhida from 'imagens/logo_-semfundo-rnefii.webp'
import { Img } from './global.styles';

interface ProviderProps  {
    children?: React.ReactNode | React.ReactNode[]
}

const GlobalProvider:React.FC<ProviderProps> = ({children}) => {

    const [statePetshop,dispatchPetshop] = useReducer(reducerPetshop.reducer,reducerPetshop.initialState());
    
    const reduxes = {
        petshop: reduxPetshop(statePetshop,dispatchPetshop),
    }

    return (
        <GlobalContext.Provider value={reduxes} >
            {children}
            <Img src={imgagemEscolhida} />
        </GlobalContext.Provider>
    )
}

export {GlobalProvider};