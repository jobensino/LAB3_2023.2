import { ScrollView, View } from "react-native"
import { ContentProps } from "./Content.type"
import { getStyles } from "./Content.style"

const Content = (props:ContentProps) => {

    const styles = getStyles({})

    return (
        <ScrollView>
            <View style={styles.container}>
                {props.children}
            </View>
        </ScrollView>
    )
}

export {
    Content,
}