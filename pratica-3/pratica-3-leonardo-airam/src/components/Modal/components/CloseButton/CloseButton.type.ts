interface _CloseButtonStylesProps extends CloseButtonStylesProps {
    fill: boolean;
}

interface CloseButtonStylesProps {
    color?: string;
    backgroundColor?: string;
    borderRadius?: number;
}

interface CloseButtonProps {
    label: string;
    fill?: boolean;
    style?: CloseButtonStylesProps;
}

export {
    CloseButtonProps,
    CloseButtonStylesProps,
    _CloseButtonStylesProps,
}