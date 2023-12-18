import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    centralizarModalD: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    botaoD: {
        borderRadius: 20,
        padding: 10,
        elevation: 0,
    },
    botaoAbertoD: {
        height: 50,
        margin: 80,
        borderWidth: 3,
        borderRadius: 25,
        borderColor: 'pink',
        padding: 10,
        fontSize: 10,
    },
    botaoFechadoD: {
        backgroundColor: '#fffcff',
    },
    textoD: {
        color: 'black',
        textAlign: 'center',
    },
    modalTextoD: {
        marginBottom: 15,
        textAlign: 'center',
    },
});

export { styles }