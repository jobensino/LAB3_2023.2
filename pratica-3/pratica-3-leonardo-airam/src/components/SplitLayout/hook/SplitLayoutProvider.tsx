import { ReactNode, createContext } from "react";

interface SplitLayoutContextProps {
    orientation: 'horizontal' | 'vertical'
}

interface SplitLayoutProviderProps extends SplitLayoutContextProps {
    children: ReactNode
}

const SplitLayoutContext = createContext<SplitLayoutContextProps>({} as SplitLayoutContextProps);

const SplitLayoutProvider = ({ children, orientation }: SplitLayoutProviderProps) => {

    const contextProps : SplitLayoutContextProps = { orientation: orientation };

    return (
        <SplitLayoutContext.Provider value={contextProps}>
            {children}
        </SplitLayoutContext.Provider>
    );
}

export {
    SplitLayoutProviderProps,
    SplitLayoutContext,
    SplitLayoutProvider,
}