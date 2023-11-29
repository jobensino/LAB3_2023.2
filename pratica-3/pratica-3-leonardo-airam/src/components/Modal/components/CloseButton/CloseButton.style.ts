import { StyleSheet } from "react-native";
import { _CloseButtonStylesProps } from "./CloseButton.type";

const getStyles = (props: _CloseButtonStylesProps)  => {
    return StyleSheet.create({

        button: {
            paddingVertical: 8,
            paddingHorizontal: 16,
            backgroundColor: props.backgroundColor ?? '#aadaff',
            borderRadius: props.borderRadius ?? 8,
            flex: props.fill ? 1 : undefined,
        },

        label: {
            textAlign: 'center',
            color: props.color ?? '#333',
        }
    });
}

export {
    getStyles,
}