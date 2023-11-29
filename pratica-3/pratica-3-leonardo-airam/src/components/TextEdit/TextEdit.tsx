import { TextInput } from "react-native";
import { getStyles } from "./TextEdit.style";
import { TextEditProps } from "./TextEdit.type";
import { useState } from "react";

const TextEdit = ({
    value,
    onChange,
    placeholder,
    style,
    keyboardType = 'default'
}: TextEditProps) => {

    const styles = getStyles({ ...style })

    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    return (

        <TextInput
            value={value}
            placeholder={placeholder}
            keyboardType={keyboardType}
            onChangeText={onChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            style={[
                styles.input,
                isFocused && styles.inputFocused,
            ]}
        />
    )
}

export {
    TextEdit
}