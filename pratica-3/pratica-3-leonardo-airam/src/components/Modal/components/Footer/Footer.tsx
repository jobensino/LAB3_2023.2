import { View } from "react-native"
import { FooterProps } from "./Footer.type"
import { getStyles } from "./Footer.style"

const Footer = ({
    style,
    children,
    align = 'start',
}: FooterProps) => {

    const styles = getStyles({ align, ...style})

    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}

export {
    Footer,
}