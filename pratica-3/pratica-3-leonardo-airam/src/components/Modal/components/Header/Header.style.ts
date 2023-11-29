import { StyleSheet } from "react-native";
import { _HeaderStylesProps } from "./Header.type";

const getStyles = (props:_HeaderStylesProps)  => {
    return StyleSheet.create({
        container: {
            paddingTop: 10,
            paddingBottom: 5,
            paddingLeft: 20,
            paddingRight: 20,
            borderBottomWidth: 1,
            borderBottomColor: 'rgba(24, 24, 24, 0.1)',
            backgroundColor: props.backgroundColor ?? undefined,

            flexDirection: 'row',

            justifyContent: (() => {
                switch (props.align) {
                    case 'center': {
                        return 'center';
                    }
                    default: {
                        return 'flex-start'
                    }
                }
            })()
        },

        title: {
            color: props.color ?? '#333',
            fontWeight: 'bold',
        },

        button: {
            position: "absolute",
            right: 4,
            top: 0,
            padding: 8,
        },

        buttonLabel: {
            fontWeight: "600"
        }
    });
}

export {
    getStyles,
}