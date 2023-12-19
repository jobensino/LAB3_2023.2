import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    input: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    texto: {
        height: 40,
        margin: 2,
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
    },

    button1: {
        top: 5,
        left: 50,
        padding: 10,
        elevation: 0,
        borderRadius: 5,
        borderWidth: 1,
    },

    button2: {
        marginTop: -36,
        right: 50,
        padding: 10,
        elevation: 0,
        borderRadius: 5,
        borderWidth: 1,
    },

    errorText: {
        color: 'red',
        marginTop: 50,
    },
    Text: {
        color: 'green',
        marginTop: 50,
    },
});


const validarEmail = (input: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailValido = input.trim().length > 0 && emailRegex.test(input);
    return emailValido;
};

export { styles, validarEmail }