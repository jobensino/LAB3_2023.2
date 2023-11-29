import { View, useWindowDimensions } from "react-native";
import { SplitLayoutProps } from "./SplitLayout.type";
import { ReactNodeUtil } from "../../utils/ReactNodeUtil";
import { getStyles } from "./SplitLayout.style";
import { SplitLayoutProvider } from "./hook";
import { Panel } from "./components";

const SplitLayoutCustom = ({
    children,
    orientation,
    style,
}: SplitLayoutProps) => {    

    const { height, width, scale, fontScale } = useWindowDimensions();

    const styles = getStyles({
        orientation: orientation,
        ...(style || {}),
    });

    return (
        <SplitLayoutProvider orientation={orientation}>
            <View style={styles.container}>
                {ReactNodeUtil.mapElement(children, Panel)}
            </View>
        </SplitLayoutProvider>
    );
}

SplitLayoutCustom.Panel = Panel;

export {
    SplitLayoutCustom as SplitLayout
};