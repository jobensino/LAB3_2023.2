import { Platform, StyleSheet } from "react-native";
import { TextEditStylesProps } from "./TextEdit.type";


const getStyles = (props: TextEditStylesProps) => {
    return StyleSheet.create({
        input: {
            marginHorizontal: 12,
            marginVertical: 6,
            height: 40,
            padding: 10,
            borderWidth: 1,
            borderColor: props.borderColor ?? '#333',
            color: props.color ?? '#333',
            borderRadius: 6,
            outlineWidth: Platform.OS == "android" || Platform.OS == "ios" ? undefined : 0,
        },
        inputFocused: {
            borderColor:  props.borderColorFocus ?? '#483d8b',
        }
    });
}

export {
    getStyles,
}