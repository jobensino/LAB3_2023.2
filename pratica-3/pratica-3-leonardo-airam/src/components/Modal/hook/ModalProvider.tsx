import { ReactNode, createContext } from "react";

interface ModalContextProps {
    isOpen: boolean;
    // onRequestClose: (value: React.SetStateAction<boolean>) => void;
    onRequestClose: () => void;
}

interface ModalProviderProps extends ModalContextProps {
    children: ReactNode
}

const ModalContext = createContext<ModalContextProps>({} as ModalContextProps);

const ModalProvider = ({ children, isOpen, onRequestClose }: ModalProviderProps) => {

    const contextProps = { isOpen: isOpen, onRequestClose: onRequestClose };

    return (
        <ModalContext.Provider value={contextProps}>
            {children}
        </ModalContext.Provider>
    );
}

export {
    ModalProviderProps,
    ModalContext,
    ModalProvider
}