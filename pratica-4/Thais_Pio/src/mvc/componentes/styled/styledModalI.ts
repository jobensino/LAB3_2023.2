import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    centralizarModalI: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 50,
    },
    botaoI: {
      borderRadius: 20,
      padding: 10,
      elevation: 0,
    },
    botaoAbertoI: {
      height: 50,
      margin: 80,
      borderWidth: 3,
      borderRadius: 25,
      borderColor: 'pink',
      padding: 10,
      fontSize: 10,
    },
    botaoFechadoI: {
      backgroundColor: '#fffcff',
    },
    textoI: {
      color: 'black',
      textAlign: 'center',
    },
    modalTextoI: {
      marginBottom: 15,
      textAlign: 'center',
    },
  });

  export {styles}