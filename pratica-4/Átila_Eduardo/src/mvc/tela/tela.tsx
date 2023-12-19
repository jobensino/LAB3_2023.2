import Delete_Banco from 'mvc/componente/delete_banco/delete';
import Insert_Banco from 'mvc/componente/insert_banco/insert';
import Buscar_Registros from 'mvc/componente/select_banco/select';
import Update_Banco from 'mvc/componente/update_banco/update';
import React from 'react';
import {SafeAreaView, Text, View } from 'react-native';

const TelaPrincipal = () => {
  return (
    <SafeAreaView>
      <View>
        <Insert_Banco/>
        {/* <Update_Banco/> quando executar, trocar para validar as outras funções
        <Delete_Banco/>
        <Buscar_Registros/> */}
      </View>
    </SafeAreaView>
  );
};

export default TelaPrincipal;