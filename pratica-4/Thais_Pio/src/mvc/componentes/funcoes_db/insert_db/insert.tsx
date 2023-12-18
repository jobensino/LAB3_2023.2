import React, { useState } from "react";
import { Conexao_Sqlite } from "../../../database/conexao_Sqlite";
import { Alert, SafeAreaView, TextInput, TouchableOpacity, Text } from "react-native";
import { formatarCep, formatarTelefone, styles } from "../../styled/styled";
//
const db = Conexao_Sqlite.getConnection();
//
const CadastrarUsuario = () => {
    const [nomeUsuario, setNomeUsuario] = useState('');
    const [enderecoUsuario, setEnderecoUsuario] = useState('');
    const [telefoneUsuario, setTelefoneUsuario] = useState('');
    const [cepUsuario, setCepUsuario] = useState('');
    //
    const validarCampos = () => {
        try {
            console.log(nomeUsuario, enderecoUsuario, telefoneUsuario, cepUsuario);
            //  somente os campos de preenchimento obrigatorio irão receber o alerta
            if (!nomeUsuario) {
                alert('Informe um nome');
                return;
            }
            //  
            if (!enderecoUsuario) {
                alert('Informe o nome da rua');
                return;
            }
            //
            if (!telefoneUsuario) {
                alert('Informe seu numero de telefone');
                return;
            }
            //
            if (!cepUsuario) {
                alert('Informe o Cep da sua cidade');
                return;
            }
            //
            db.transaction(function (teste) {
                teste.executeSql('INSERT INTO cadastro_usuario (nome, endereco, telefone, cep) VALUES (?,?,?,?)',
                    [nomeUsuario, enderecoUsuario, telefoneUsuario, cepUsuario], (teste, results) => {
                        console.log("Resultado", results.rowsAffected);
                        //                
                        if (results.rowsAffected > 0) {
                            console.log('Foi');
                            Alert.alert(
                                'Usuário Registrado com Sucesso',
                                'Sucesso ao inserir o registro na tabela',
                                [
                                    {
                                        text: 'Ok',
                                    },
                                ],
                                { cancelable: false }
                            );
                        } else {
                            Alert.alert(
                                'Erro ao registrar usuário'
                            );
                        }
                    });
                });
                setNomeUsuario('');
                setEnderecoUsuario('');
                setTelefoneUsuario('');
                setCepUsuario('');
        } catch (error) {
            console.error('Erro inesperado:', error);
            Alert.alert('Erro interno. Por favor, tente novamente.');
        };
//
    }
    //
    return (
        <SafeAreaView>
            <TextInput
                style={styles.input}
                onChangeText={setNomeUsuario}
                value={nomeUsuario}
                maxLength={30}
                placeholder="Nome"
            />
            <TextInput
                style={styles.input}
                onChangeText={setEnderecoUsuario}
                value={enderecoUsuario}
                maxLength={30}
                placeholder="Endereço"
                keyboardType="default"
            />
            <TextInput
                style={styles.input}
                onChangeText={(text) => setTelefoneUsuario(formatarTelefone(text))}
                value={telefoneUsuario}
                placeholder="Telefone (XX) XXXXXXXXX"
                keyboardType="phone-pad"
            />
            <TextInput
                style={styles.input}
                onChangeText={(text) => setCepUsuario(formatarCep(text))}
                value={cepUsuario}
                maxLength={8}
                placeholder="Cep XXXXX-XXX"
                keyboardType="phone-pad"
            />
            <TouchableOpacity
                style={styles.enviar}
                onPress={validarCampos}>
            <Text>Enviar</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};
//
export default CadastrarUsuario;