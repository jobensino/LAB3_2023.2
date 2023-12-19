enum ActionsType {
    DETAILS,
    LIST_ALL,
    ERROR,
    SUCESS,
}

type TPayloadError = {
    message: string,
}

type TActionError = {
    type: ActionsType.ERROR,
    payload: TPayloadError,
}

type TPayloadSucess = {
    message: string,
}

type TActionSucess = {
    type: ActionsType.SUCESS,
    payload: TPayloadSucess,
}

type TPayloadListAll<T> = {
    items: T[],
}

type TActionListAll<T> = {
    type: ActionsType.LIST_ALL,
    payload: TPayloadListAll<T>,
}

type TPayloadDetails<T> = {
    item: T,
}

type TActionDetails<T> = {
    type: ActionsType.DETAILS,
    payload: TPayloadDetails<T>,
}

type TActions<T> = TActionSucess  | TActionError | TActionDetails<T> | TActionListAll<T>

export {
    ActionsType,

    TActions,

    TActionError,
    TPayloadError,
    TActionSucess,
    TPayloadSucess,
    TPayloadListAll,
    TActionListAll,
    TPayloadDetails,
    TActionDetails
}