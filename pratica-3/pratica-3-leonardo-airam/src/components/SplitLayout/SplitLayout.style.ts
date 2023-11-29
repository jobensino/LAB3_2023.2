import { StyleSheet } from "react-native";
import { _SplitLayoutStyleProps } from "./SplitLayout.type";

const getStyles = (props: _SplitLayoutStyleProps) => {
    
    return StyleSheet.create({
        container: {
            backgroundColor: props.backgroundColor ?? undefined,
            flexDirection: props.orientation == "horizontal" ? 'row' : 'column',
            flex: 1,
            height: '100%',
            width: '100%',
        },
    });
};

export {
    getStyles,
}