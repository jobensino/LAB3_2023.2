import { ReactNode } from "react";


interface _PanelStyleProps extends PanelStyleProps{
    orientation: 'horizontal' | 'vertical'
    size: number | undefined;
    sizePercent: number | undefined;
}

interface PanelStyleProps {
    backgroundColor?: string;
    padding?: number;
}

interface PanelProps {
    children: ReactNode
    style?: PanelStyleProps;
    size?: number;
    sizePercent?: number;
}

export {
    PanelProps,
    PanelStyleProps,
    _PanelStyleProps,
}
