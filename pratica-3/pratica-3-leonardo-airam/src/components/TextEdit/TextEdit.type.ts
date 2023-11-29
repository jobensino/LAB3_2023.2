
interface TextEditStylesProps {
    color?: string;
    borderColor?: string;
    borderColorFocus?: string;
}

interface TextEditProps {
    value: string;
    onChange: (text: string) => void;
    placeholder?: string;
    keyboardType?: 'default' | 'number-pad' | 'decimal-pad' | 'numeric' | 'email-address' | 'phone-pad';
    style?: TextEditStylesProps;
}

export {
    TextEditProps,
    TextEditStylesProps,
}