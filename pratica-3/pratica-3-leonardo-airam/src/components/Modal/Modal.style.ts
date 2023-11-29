import { StyleSheet } from "react-native";
import { _ModalStylesProps } from "./Modal.type";

const getStyles = (props: _ModalStylesProps) => {

    return StyleSheet.create({
        modal: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },

        container: {
            backgroundColor: props.backgroundColor ?? 'white',
            borderRadius: props.borderRadius ?? 10,
            elevation: props.elevation ?? 5,
            overflow: 'hidden',
            width: props.widthScreen * (props.widthPercentage ?? .6),
            height: props.heightPercentage == undefined ? undefined : props.heightScreen * props.heightPercentage,
            minHeight: props.minHeightPercentage == undefined ? 'auto' : props.heightScreen * props.minHeightPercentage,
            maxHeight: props.heightScreen * (props.maxHeightPercentage ?? .8),
        },

        backdrop: {
            ...StyleSheet.absoluteFillObject,
            backgroundColor: 'rgba(24, 24, 24, 0.5)',
            blur: 10,
            backdropFilter: 'blur(10px)',
        },

    });
};

export {
    getStyles
}