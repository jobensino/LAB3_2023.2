import ModalD from '../componentes/modal/modalD'
import ModalI from "../componentes/modal/modalI";
import ModalS from "../componentes/modal/modalS";
import ModalSId from "../componentes/modal/modalSId";
import ModalU from "../componentes/modal/modalU";
import { styles } from "../componentes/styled/styled";
import { Conexao_Sqlite } from "../database/conexao_Sqlite";
import React, { useEffect } from "react";
import { SafeAreaView, TouchableOpacity, Text, Alert } from "react-native";

const db = Conexao_Sqlite.getConnection();

const TelaInicial = () => {
    try {
        useEffect(() => {
            db.transaction((teste) => {
                teste.executeSql(
                    "SELECT name FROM sqlite_master WHERE type = 'table' AND name = 'cadastro_usuario'",
                    [],
                    (teste, result) => {
                        console.log('Número de tabelas com o nome "cadastro_usuario":', result.rows.length);
                        if (result.rows.length === 0) {
                            teste.executeSql('DROP TABLE IF EXISTS cadastro_usuario', []);
                            teste.executeSql('CREATE TABLE IF NOT EXISTS cadastro_usuario(user_id INTEGER PRIMARY KEY AUTOINCREMENT, nome VARCHAR(30), telefone INT(11), endereco VARCHAR(30), cep INT(8))',
                                []
                            );
                            console.log('Tabela "cadastro_usuario" criada com sucesso!');
                        } else {
                            console.log('Tabela "cadastro_usuario" já existe.');
                        }
                    });
            });
        }, []);
    } catch (error) {
        console.error('Erro inesperado:', error);
        Alert.alert('Erro interno. Por favor, tente novamente.');
    };
    return (
        <SafeAreaView>
            <Text style={[styles.texto1, { top: 130, textAlign: "center", fontSize: 18 }]}>Bem-vindo à Tela Inicial</Text>
            <TouchableOpacity>
                <Text style={[styles.texto2, { top: 160, textAlign: "center", fontSize: 18 }]}>Selecione uma opção</Text>
                <ModalI />
                <ModalU />
                <ModalD />
                <ModalS />
                <ModalSId />
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default TelaInicial;
