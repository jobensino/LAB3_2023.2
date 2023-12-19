import { ReactNode, createContext, useContext, useReducer } from "react";
import { IReducerContextProps, TReducerProps, TReducerProviderProps } from "./types";

export function createReducerContext<S, A>(props: TReducerProps<S, A>)
    : [(props: TReducerProviderProps) => ReactNode, (componente: string) => IReducerContextProps<S, A>] {

    const { reducer, initialState } = props;

    const ReducerContext = createContext<IReducerContextProps<S, A>>({} as IReducerContextProps<S, A>);

    const UseContext = (componente: string) => {
        const context = useContext(ReducerContext);

        if (context === undefined) {
            throw new Error(`O componente ${componente} não esta dentro do contexto.`)
        }

        return context;
    }

    const ReducerProvider = (props: TReducerProviderProps) => {

        const [state, dispatch] = useReducer(reducer, initialState);

        const contextValue = { state, dispatch };

        return (
            <ReducerContext.Provider value={contextValue}>
                {props.children}
            </ReducerContext.Provider>
        );
    }

    return [ReducerProvider, UseContext]
}