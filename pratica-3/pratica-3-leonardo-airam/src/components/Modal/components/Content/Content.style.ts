import { StyleSheet } from "react-native";
import { ContentStyleProps } from "./Content.type";

const getStyles = (props:ContentStyleProps) => {
    return StyleSheet.create({
        container: {
            paddingLeft: 20,
            paddingRight: 20,
            paddingBottom: 5,
            paddingTop: 5, 
      
            flex: 1,
        }
    })
}

export {
    getStyles,
}