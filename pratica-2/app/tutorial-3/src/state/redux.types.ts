import { DataRadixService } from "src/db";

type TStateAction = 'update'|'insert'|'delete'|'load';

type TStateBase<E> = {
    event: E,
    action: TStateAction|null,
}

type TStateVars<D,E> = TStateBase<E> & {
    curr: D|null
    items: D[]
}

type TBasePayload<D,E> = TStateBase<E> & {
    owner: string,
    item?: D
    ds?: DataRadixService<D>|null,
    callback?: ()=>void,
}

type TActionData<T,P> = {
    type: T,
    payload: P
}

type TReduxState<S> = {
    state: S,
}

export type {TActionData,TReduxState,TStateVars,TBasePayload}