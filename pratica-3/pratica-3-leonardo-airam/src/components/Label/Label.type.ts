
interface LabelStylesProps {
    color?: string;
    fontSize?: number;
    fontWeight?: 'normal' | 'bold';
}

interface LabelProps {
    text: string;
    style? : LabelStylesProps;
}

export {
    LabelProps,
    LabelStylesProps,
}