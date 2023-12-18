import { Alert, SafeAreaView, TextInput, TouchableOpacity, Text } from "react-native";
import { Conexao_Sqlite } from "../../../database/conexao_Sqlite";
import React, { useState } from "react";
import { styles } from "../../styled/styled";
//
const db = Conexao_Sqlite.getConnection();
//
const DeletarUsuario = () => {
    const [idUsuario, setIdUsuario] = useState('');
    // 
    const deletarRegistro = () => {
        try {
            //            console.log(idUsuario); teste
            if (!idUsuario) {
                alert('Informe um Id de usuário valido');
                return;
            }
            //  somente o campo equivalente ao id sera deletado
            db.transaction(function (teste) {
                teste.executeSql('DELETE FROM cadastro_usuario where user_id = ?',
                    [idUsuario], (teste, results) => {
                        console.log("Resultado", results.rowsAffected);
                        //                
                        if (results.rowsAffected > 0) {
                            Alert.alert(
                                'Usuário Removido com Sucesso',
                                'Sucesso ao deletar o registro na tabela',
                                [
                                    {
                                        text: 'Ok',
                                    },
                                ],
                                { cancelable: false }
                            );
                        } else {
                            Alert.alert(
                                'Erro ao remover usuário, entre com um Id valido'
                            );
                        }
                    });
                (error: any) => {
                    console.error('Erro ao executar SQL:', error);
                    Alert.alert('Erro interno. Por favor, tente novamente.');
                }
            });
        } catch (error) {
            console.error('Erro inesperado:', error);
            Alert.alert('Erro interno. Por favor, tente novamente.');
        };
        setIdUsuario('');
    };
    //
    return (
        <SafeAreaView>
            <Text>Deletar registro</Text>
            <TextInput
                style={styles.input}
                onChangeText={setIdUsuario}
                value={idUsuario}
                placeholder="Id de Usuário"
                keyboardType="phone-pad"
            />
            <TouchableOpacity
                style={styles.enviar}
                onPress={deletarRegistro}>
                <Text>Deletar</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};
//
export default DeletarUsuario;