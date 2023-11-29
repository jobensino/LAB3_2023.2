import { StyleSheet } from "react-native";
import { LabelStylesProps } from "./Label.type";

const getStyles = (props: LabelStylesProps)  => {
    return StyleSheet.create({
        label: {
            marginHorizontal: 12,
            marginVertical: 6,
            fontSize: props.fontSize ?? 16,
            fontWeight: props.fontWeight ?? 'normal',
            color: props.color ?? '#333',
        },
    });
}

export {
    getStyles,
}