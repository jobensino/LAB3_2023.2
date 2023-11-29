import { Animated, useWindowDimensions, Modal, TouchableWithoutFeedback, ViewStyle, View } from "react-native";
import { ReactElement, ReactNode, useRef } from "react";
import { ReactNodeUtil } from "../../utils/ReactNodeUtil";
import { ModalProps } from "./Modal.type";
import { getStyles } from "./Modal.style";
import { ModalProvider, useModalContext } from "./hook";
import { ActionButton, CloseButton, Content, Footer, Header } from "./components";

const Backdrop = (props: { isStatic: boolean, animation: Animated.Value, style: ViewStyle }) => {

    const { onRequestClose } = useModalContext("Modal.Backdrop")

    return (
        <TouchableWithoutFeedback onPress={() => !props.isStatic ? onRequestClose : null}>
            <Animated.View style={[
                props.style,
                { opacity: props.animation }
            ]} />
        </TouchableWithoutFeedback>
    )
}

const Container = (props: { animation: Animated.Value, fadeAnimation: Animated.Value, isSlide: boolean, style: ViewStyle, width: number, children: ReactNode }) => {
    return (
        <Animated.View style={[
            props.style,
            {
                opacity: props.fadeAnimation,
                transform: [
                    {
                        translateY: props.isSlide ? props.animation.interpolate({ inputRange: [0, 1], outputRange: [props.width, 0] }) : 0
                    },
                    {
                        scale: props.fadeAnimation.interpolate({ inputRange: [0, 1], outputRange: [.8, 1] })
                    }
                ],
            },
        ]}>
            {props.children}
        </Animated.View>
    )
}

const ModalCustom = ({
    isOpen,
    setOpen,
    style,
    children,
    animationType = 'fade',
    isBackdropStatic = true
}: ModalProps) => {    

    const { height, width, scale, fontScale } = useWindowDimensions();

    const fadeAnimation = useRef(new Animated.Value(0)).current;

    const slideAnimation = useRef(new Animated.Value(0)).current;

    const styles = getStyles({
        widthScreen: width,
        heightScreen: height,
        ...(style || {}),
    });

    const onShowModal = () => {
        const animations = [Animated.timing(fadeAnimation, { toValue: 1, duration: 200, useNativeDriver: true })];

        if (animationType === 'slide') {
            animations.push(Animated.timing(slideAnimation, { toValue: 1, duration: 200, useNativeDriver: true }));
        }

        Animated.parallel(animations).start();
    };

    const onRequestCloseModal = () => {

        const animations = [Animated.timing(fadeAnimation, { toValue: 0, duration: 200, useNativeDriver: true })];

        if (animationType === 'slide') {
            animations.push(Animated.timing(slideAnimation, { toValue: 0, duration: 200, useNativeDriver: true }));
        }

        Animated.parallel(animations)
            .start(() => setOpen(false));
    };
    
    return (
        <ModalProvider isOpen={isOpen} onRequestClose={onRequestCloseModal}>
            <Modal
                transparent
                animationType="none"
                visible={isOpen}
                onRequestClose={onRequestCloseModal}
                onShow={onShowModal}
            >
                <View style={styles.modal}>

                    {/* Fundo com opacidade */}
                    <Backdrop isStatic={isBackdropStatic || true} animation={fadeAnimation} style={styles.backdrop} />

                    <Container
                        fadeAnimation={fadeAnimation}
                        style={styles.container}
                        width={width}
                        animation={animationType === 'slide' ? slideAnimation : fadeAnimation}
                        isSlide={animationType === 'slide'}
                    >
                        {ReactNodeUtil.findElement(children ,Header)}

                        {ReactNodeUtil.findElement(children ,Content)}

                        {ReactNodeUtil.findElement(children ,Footer)}

                    </Container>

                </View>

            </Modal>
        </ModalProvider>
    );
}

ModalCustom.Header = Header;
ModalCustom.Content = Content;
ModalCustom.Footer = Footer;
ModalCustom.CloseButton = CloseButton;
ModalCustom.ActionButton = ActionButton;

export {
    ModalCustom as Modal
};