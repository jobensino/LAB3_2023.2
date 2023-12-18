import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    centralizarModalU: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -550,
    },
    botaoU: {
        borderRadius: 20,
        padding: 10,
        elevation: 0,
    },
    botaoAbertoU: {
        height: 50,
        margin: 80,
        borderWidth: 3,
        borderRadius: 25,
        borderColor: 'pink',
        padding: 10,
        fontSize: 10,
    },
    botaoFechadoU: {
        backgroundColor: '#fffcff',
    },
    textoU: {
        color: 'black',
        textAlign: 'center',
    },
    modalTextoU: {
        marginBottom: 15,
        textAlign: 'center',
    },
});

export { styles }