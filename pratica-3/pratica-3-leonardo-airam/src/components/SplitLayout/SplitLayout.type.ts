import { ReactNode } from "react";

interface _SplitLayoutStyleProps extends SplitLayoutStyleProps{
    orientation: 'horizontal' | 'vertical'
}

interface SplitLayoutStyleProps {
    backgroundColor?: string;
}

interface SplitLayoutProps {
    orientation: 'horizontal' | 'vertical'
    children: ReactNode;
    style?: SplitLayoutStyleProps;
}

export {
    SplitLayoutProps,
    SplitLayoutStyleProps,
    _SplitLayoutStyleProps,
}
