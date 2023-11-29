import { Text, TouchableOpacity } from "react-native";
import { CloseButtonProps } from "./CloseButton.type";
import { getStyles } from "./CloseButton.style";
import { useModalContext } from "../../hook";

const CloseButton = ({
    label,
    style,
    fill = false,
}: CloseButtonProps) => {

    const { onRequestClose } = useModalContext("Modal.CloseButton");

    const styles = getStyles({ fill, ...style })

    return (
        <TouchableOpacity activeOpacity={.5} style={styles.button} onPress={onRequestClose}>
            <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
    )
}

export {
    CloseButton
}