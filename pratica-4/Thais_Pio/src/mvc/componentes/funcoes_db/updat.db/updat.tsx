import { formatarCep, formatarTelefone, styles } from '../../styled/styled';
import { Conexao_Sqlite } from '../../../database/conexao_Sqlite';
import React from "react";
import { SetStateAction, useState } from "react";
import { Alert, SafeAreaView, TextInput, TouchableOpacity, Text } from "react-native";



const db = Conexao_Sqlite.getConnection();

const AtualizarDados = () => {
    const [idUsuario, setIdUsuario] = useState('');
    const [nomeUsuario, setNomeUsuario] = useState('');
    const [enderecoUsuario, setEnderecoUsuario] = useState('');
    const [telefoneUsuario, setTelefoneUsuario] = useState('');
    const [cepUsuario, setCepUsuario] = useState('');

    const atualizarEstados = (nome: SetStateAction<string>, endereco: SetStateAction<string>, telefone: SetStateAction<string>, cep: SetStateAction<string>) => {
        setNomeUsuario(nome);
        setEnderecoUsuario(endereco);
        setTelefoneUsuario(telefone);
        setCepUsuario(cep);
    }

    const buscarUsuario = () => {
        try {
            if (!idUsuario) {
                alert('Informe um Id de usuário valido');
                return;
            }
            db.transaction(function (teste) {
                teste.executeSql(
                    'SELECT * FROM cadastro_usuario where user_id = ?',
                    [idUsuario],
                    (tx, results) => {
                        const aux = results.rows.length;
                        if (aux > 0) {
                            const aux2 = results.rows.item(0);
                            atualizarEstados(
                                aux2.nome,
                                aux2.endereco,
                                aux2.telefone,
                                aux2.cep
                            );
                        } else {
                            alert('Registro não encontrado');
                            atualizarEstados('', '', '', '');
                        }
                    }
                )
            });
        } catch (error) {
            console.error('Erro inesperado:', error);
            Alert.alert('Erro interno. Por favor, tente novamente.');
        }
    };

    const atualizarUsuario = () => {
        try {

            if (!idUsuario) {
                alert('Informe um Id Valido');
                return;
            }
            //
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

            db.transaction((teste) => {
                teste.executeSql(
                    'UPDATE cadastro_usuario set nome = ?, endereco = ?, telefone = ?, cep = ? where user_id = ?',
                    [nomeUsuario, enderecoUsuario, telefoneUsuario, cepUsuario, idUsuario],
                    (tx, result) => {
                        if (result.rowsAffected > 0) {
                            Alert.alert(
                                'Usuário Atualizado com Sucesso',
                                'Sucesso ao atualizar o registro na tabela',
                                [
                                    {
                                        text: 'Ok',
                                    },
                                ],
                                { cancelable: false }
                            );
                        } else {
                            Alert.alert(
                                'Erro ao atualizar usuário'
                            );
                        }
                    });
            });
        } catch (error) {
            console.error('Erro inesperado:', error);
            Alert.alert('Erro interno. Por favor, tente novamente.');
        }
        setIdUsuario('');
        setNomeUsuario('');
        setEnderecoUsuario('');
        setTelefoneUsuario('');
        setCepUsuario('');
    };
    return (
        <SafeAreaView>
            <TextInput style={[styles.input, { marginTop: 550 }]}
                onChangeText={setIdUsuario}
                value={idUsuario}
                placeholder="Id de Usuário"
                keyboardType="phone-pad"
            />
            <TouchableOpacity
                style={styles.enviar}
                onPress={buscarUsuario}>
                <Text>Buscar</Text>
            </TouchableOpacity>

            <TextInput
                style={[styles.input, { marginTop: -70 }]}
                onChangeText={setNomeUsuario}
                value={nomeUsuario}
                maxLength={50}
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
                onPress={atualizarUsuario}>
                <Text>Atualizar</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};
export default AtualizarDados;