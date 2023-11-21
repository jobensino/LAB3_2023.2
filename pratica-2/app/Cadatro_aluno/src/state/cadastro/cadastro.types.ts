import { CadastroAluno } from "model/cadastro.model";
import { DataRadixService } from "src/db";
import { TActionData, TBasePayload, TReduxState, TStateVars } from "state/redux.types";

type TEventCadastro= 'load_cadastro'|'add_cadastro'|'none';

type TStateCadastro = TStateVars<CadastroAluno,TEventCadastro>

type TPayloadCadastro = TBasePayload<CadastroAluno,TEventCadastro> & { 
    item? : CadastroAluno,
    ds?: DataRadixService<CadastroAluno>,
}

type TActionCadastro = TActionData<TEventCadastro,TPayloadCadastro>;

type TReduxCadastro = TReduxState<TStateCadastro> & {
    add: (owner:string,item:CadastroAluno,ds:DataRadixService<CadastroAluno>,callback?:()=>void)=>void,
    load: (owner:string,ds:DataRadixService<CadastroAluno>,callback?:()=>void)=>void,
}

export type {TEventCadastro,TReduxCadastro,TStateCadastro,TActionCadastro,TPayloadCadastro}