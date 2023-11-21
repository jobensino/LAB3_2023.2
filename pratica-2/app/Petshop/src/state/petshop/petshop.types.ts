import { PetshopCadastro } from "model/petshop.model";
import { DataRadixService } from "src/db";
import { TActionData, TBasePayload, TReduxState, TStateVars } from "state/redux.types";

type TEventPetshop= 'load_petshop'|'add_petshop'|'none';

type TStatePetshop = TStateVars<PetshopCadastro,TEventPetshop>

type TPayloadPetshop = TBasePayload<PetshopCadastro,TEventPetshop> & { 
    item? : PetshopCadastro,
    ds?: DataRadixService<PetshopCadastro>,
}

type TActionPetshop = TActionData<TEventPetshop,TPayloadPetshop>;

type TReduxPetshop = TReduxState<TStatePetshop> & {
    add: (owner:string,item:PetshopCadastro,ds:DataRadixService<PetshopCadastro>,callback?:()=>void)=>void,
    load: (owner:string,ds:DataRadixService<PetshopCadastro>,callback?:()=>void)=>void,
}

export type {TEventPetshop,TReduxPetshop,TStatePetshop,TActionPetshop,TPayloadPetshop}