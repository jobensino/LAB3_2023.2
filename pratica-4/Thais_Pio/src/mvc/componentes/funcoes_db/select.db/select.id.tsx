import { useState } from "react";
import { Conexao_Sqlite } from "../../../database/conexao_Sqlite";
import { SafeAreaView, TextInput, TouchableOpacity, Text, View } from "react-native";
import { styles } from "../../styled/styled";
import React from "react";
//
const db = Conexao_Sqlite.getConnection();
//
const SelectId = () => {
    const [idUsuario, setIdUsuario] = useState('');
    const [dadosUsuario, setDadosUsuario] = useState({});
//
    const BuscarUsuario = () =>{
        console.log(idUsuario)
        setDadosUsuario({});
        if (!idUsuario) {
            alert('Informe um Id de usuário valido');
            return;
        }
//
        db.transaction(function (teste) {
            teste.executeSql(
                'SELECT * FROM cadastro_usuario where user_id = ?',
                [idUsuario], 
                (tx,results) => {
                    const aux = results.rows.length;
                    console.log('aux', aux);
                    if(aux > 0 ){
                        setDadosUsuario(results.rows.item(0));
                    }else{
                        alert('Registro não encontrado');
                    }
                }
            )
        });
        setIdUsuario('');
    }
    return(
        <SafeAreaView>
        <TextInput
            style={styles.input}
            onChangeText={setIdUsuario}
            value={idUsuario}
            placeholder="Id de Usuário"
            keyboardType="phone-pad"
        />
        <TouchableOpacity
            style={styles.enviar}
            onPress={BuscarUsuario}>
            <Text>Buscar</Text>
        </TouchableOpacity>
        <View style = {styles.caixa}>
        <Text>Código : {dadosUsuario.user_id}</Text>
        <Text>Nome : {dadosUsuario.nome}</Text>
        <Text>Telefone : {dadosUsuario.endereco}</Text>
        <Text>Endereço : {dadosUsuario.telefone}</Text>
        <Text>Cep : {dadosUsuario.cep}</Text>
        </View>
    </SafeAreaView>
    );
};
//
export default SelectId;