import { DespesaAttr } from "model/despesa.model";
import { DataRadixService } from "src/db";
import { TActionData, TBasePayload, TReduxState, TStateVars } from "state/redux.types";

type TEventDespesa= 'load_score'|'add_score'|'none';

type TStateDespesa = TStateVars<DespesaAttr,TEventDespesa>

type TPayloadDespesa = TBasePayload<DespesaAttr,TEventDespesa> & { 
    item? : DespesaAttr,
    ds?: DataRadixService<DespesaAttr>,
}

type TActionDespesa = TActionData<TEventDespesa,TPayloadDespesa>;

type TReduxDespesa = TReduxState<TStateDespesa> & {
    add: (owner:string,item:DespesaAttr,ds:DataRadixService<DespesaAttr>,callback?:()=>void)=>void,
    load: (owner:string,ds:DataRadixService<DespesaAttr>,callback?:()=>void)=>void,
}

export type {TEventDespesa,TReduxDespesa,TStateDespesa,TActionDespesa,TPayloadDespesa}