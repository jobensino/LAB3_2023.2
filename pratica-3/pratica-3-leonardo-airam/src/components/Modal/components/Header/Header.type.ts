import { ReactNode } from "react"

interface _HeaderStylesProps extends HeaderStylesProps {
    align?: 'start' | 'center';
}

interface HeaderStylesProps {
    color?: string;
    backgroundColor?: string;
}

interface HeaderProps {
    title: string;
    children?: ReactNode;
    style?: HeaderStylesProps;
    showCloseButton?: Boolean;
    align?: 'start' | 'center';
}

export {
    HeaderProps,
    HeaderStylesProps,
    _HeaderStylesProps,
}