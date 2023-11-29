import { ReactNode } from "react";

interface _FooterStylesProps extends FooterStylesProps {
    align?: 'start' | 'end' | 'center';
}
interface FooterStylesProps {
    backgroundColor?: string;
}

interface FooterProps {
    style?: FooterStylesProps;
    align?: 'start' | 'end' | 'center';
    children: ReactNode | [ReactNode, ...ReactNode[]];
}

export {
    FooterProps,
    FooterStylesProps,
    _FooterStylesProps,
}