import { StyleSheet } from 'react-native'
//
const styles = StyleSheet.create({
    input: {
        top: 50,
        height: 40,
        margin: 5,
        borderWidth: 5,
        borderRadius: 25,
        borderColor: 'pink',
        padding: 10,
    },
    button: {
        height: 20,
        margin: 50,
        borderWidth: 5,
        borderRadius: 25,
        borderBlockColor: 'pink',
        padding: 10,
        color: 'black',
    },
    enviar: {
        height: 50,
        margin: 80,
        borderWidth: 3,
        borderRadius: 25,
        borderColor: 'pink',
        padding: 10,
        fontSize: 10,
    },
    caixa: {
        borderRadius: 25,
        borderWidth: 10,
        borderColor: 'pink',
        borderStyle: 'dotted',
    },
    texto1: {
        color: '#111',
        fontSize: 12,
        fontWeight: '700',
    },
    texto2: {
        color: '#111',
        fontSize: 18,
    },
});
//
const formatarTelefone = (input: string) => {
    const regex = /^([0-9]{2})([0-9]{4,5})([0-9]{4})$/;
    const str = input.replace(/[^0-9]/g, "").slice(0, 11);
    // 
    const result = str.replace(regex, "($1)$2-$3");
    //  
    return result;
}
//
const formatarCep = (input: string) => {
    const regex = /^([0-9]{5})([0-9]{3})$/;
    //
    const str = input.replace(/[^0-9]/g, "").slice(0, 8);
    //
    const result = str.replace(regex, "$1-$2");
    //
    return result;
}
//
export { styles, formatarTelefone, formatarCep }