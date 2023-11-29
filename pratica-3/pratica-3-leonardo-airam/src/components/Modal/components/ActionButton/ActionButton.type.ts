interface _ActionButtonStylesProps extends ActionButtonStylesProps {
    fill: boolean;
}

interface ActionButtonStylesProps {
    color?: string;
    backgroundColor?: string;
    borderRadius?: number;
}

interface ActionButtonProps {
    label: string;
    onPress: (onRequestClose: () => void) => void;
    fill?: boolean;
    style?: ActionButtonStylesProps;
}

export {
    ActionButtonProps,
    ActionButtonStylesProps,
    _ActionButtonStylesProps,
}