import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    centralizar: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 300,
    },
    button1: {
        top: -5,
        padding: 10,
        elevation: 0,
        borderRadius: 5,
        borderWidth: 1,
    },

    button2: {
        right: 50,
        padding: 10,
        elevation: 0,
        borderRadius: 5,
        borderWidth: 1,
    },

    texto: {
        height: 40,
        margin: 2,
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
    },
});
export { styles };