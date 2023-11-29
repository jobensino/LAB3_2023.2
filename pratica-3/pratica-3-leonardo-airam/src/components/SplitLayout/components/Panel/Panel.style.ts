import { StyleSheet } from "react-native";
import { _PanelStyleProps } from "./Panel.type";

const getStyles = (props:_PanelStyleProps) => {
    return StyleSheet.create({
        container: {
            backgroundColor: props.backgroundColor ?? 'transparent',
            padding: props.padding ?? 8,
            flex: 1,
            
            width: '100%',
            height: '100%',
            
            maxHeight: props.orientation == 'vertical' 
                ? props.size ?? props.sizePercent ? `${props.sizePercent!}%` : undefined 
                : undefined,

            maxWidth: props.orientation == 'horizontal' 
                ? props.size ?? props.sizePercent ? `${props.sizePercent!}%` : undefined 
                : undefined,
        }
    })
}

export {
    getStyles,
}