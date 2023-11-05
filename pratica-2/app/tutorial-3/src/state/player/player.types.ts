import { PlayerScoreAttr } from "model/player.model";
import { DataRadixService } from "src/db";
import { TActionData, TBasePayload, TReduxState, TStateVars } from "state/redux.types";

type TEventPlayer= 'load_score'|'add_score'|'none';

type TStatePlayer = TStateVars<PlayerScoreAttr,TEventPlayer>

type TPayloadPlayer = TBasePayload<PlayerScoreAttr,TEventPlayer> & { 
    item? : PlayerScoreAttr,
    ds?: DataRadixService<PlayerScoreAttr>,
}

type TActionPlayer = TActionData<TEventPlayer,TPayloadPlayer>;

type TReduxPlayer = TReduxState<TStatePlayer> & {
    add: (owner:string,item:PlayerScoreAttr,ds:DataRadixService<PlayerScoreAttr>,callback?:()=>void)=>void,
    load: (owner:string,ds:DataRadixService<PlayerScoreAttr>,callback?:()=>void)=>void,
}

export type {TEventPlayer,TReduxPlayer,TStatePlayer,TActionPlayer,TPayloadPlayer}