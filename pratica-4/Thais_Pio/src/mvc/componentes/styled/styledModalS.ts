import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    centralizarModalS: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      top: 300,
    },
    botaoS: {
      borderRadius: 20,
      padding: 10,
      elevation: 0,
    },
    botaoAbertoS: {
      height: 50,
      margin: 80,
      borderWidth: 3,
      borderRadius: 25,
      borderColor: 'pink',
      padding: 10,
      fontSize: 10,
    },
    botaoFechadoS: {
      backgroundColor: '#fffcff',
    },
    textoS: {
      color: 'black',
      textAlign: 'center',
    },
    modalTextoS: {
      marginBottom: 15,
      textAlign: 'center',
    },
  });

  export {styles}