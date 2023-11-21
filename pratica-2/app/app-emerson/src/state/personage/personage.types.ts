import { PersonageAttr } from "model/personage.model";
import { DataRadixService } from "src/db";
import { TActionData, TBasePayload, TReduxState, TStateVars } from "state/redux.types";

type TEventPersonage= 'load_personage'|'add_personage'|'none';

type TStatePersonage = TStateVars<PersonageAttr,TEventPersonage>

type TPayloadPersonage = TBasePayload<PersonageAttr,TEventPersonage> & { 
    item? : PersonageAttr,
    ds?: DataRadixService<PersonageAttr>,
}

type TActionPersonage = TActionData<TEventPersonage,TPayloadPersonage>;

type TReduxPersonage = TReduxState<TStatePersonage> & {
    add: (owner:string,item:PersonageAttr,ds:DataRadixService<PersonageAttr>,callback?:()=>void)=>void,
    load: (owner:string,ds:DataRadixService<PersonageAttr>,callback?:()=>void)=>void,
}

export type {TEventPersonage,TReduxPersonage,TStatePersonage,TActionPersonage,TPayloadPersonage}