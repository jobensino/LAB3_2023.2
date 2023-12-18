import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    centralizarModalSId: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    botaoSId: {
      borderRadius: 20,
      padding: 10,
      elevation: 0,
    },
    botaoAbertoSId: {
      height: 50,
      margin: 80,
      borderWidth: 3,
      borderRadius: 25,
      borderColor: 'pink',
      padding: 10,
      fontSize: 10,
    },
    botaoFechadoSId: {
      backgroundColor: '#fffcff',
    },
    textoSId: {
      top: 3,
      color: 'black',
      textAlign: 'center',
    },
    modalTextoSId: {
      marginBottom: 15,
      textAlign: 'center',
    },
  });

  export {styles}