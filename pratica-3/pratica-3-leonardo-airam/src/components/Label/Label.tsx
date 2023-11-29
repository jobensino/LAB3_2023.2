import { Text } from "react-native";
import { getStyles } from "./Label.style";
import { LabelProps } from "./Label.type";

const Label = ({
    text,
    style
}: LabelProps) => {

    const styles = getStyles({ ...style })

    return (
        <Text style={styles.label}>
            {text}
        </Text>
    )
}

export {
    Label
}