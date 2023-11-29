import { ReactNode } from "react";

interface ModalStylesProps {
    backgroundColor?: string;
    widthPercentage?: number;
    heightPercentage?: number;
    maxHeightPercentage?: number;
    minHeightPercentage?: number;
    borderRadius?: number;
    elevation?: number;
}

interface _ModalStylesProps extends ModalStylesProps {
    widthScreen: number;
    heightScreen: number;
}

interface ModalProps {
    isOpen: boolean;
    animationType?: 'fade' | 'slide';
    isBackdropStatic?: boolean;
    style?: ModalStylesProps;
    setOpen: (value: React.SetStateAction<boolean>) => void;
    children: ReactNode;
}

export {
    ModalProps,
    ModalStylesProps,
    _ModalStylesProps,
}