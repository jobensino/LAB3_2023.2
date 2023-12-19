import React, { useState, useEffect } from 'react';
import { Pressable, TextInput, View, Text } from 'react-native';
import { createTable, inserte_tabela } from '../../database/banco_de_dados';
import { styles, validarEmail } from './insert.styled';

const Insert_Banco = () => {
    const [Email, onChangeEmail] = React.useState('');
    const [Senha, onChangeSenha] = React.useState('');
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const [tabelaCriada, setTabelaCriada] = useState(false);

    const EmailValido = validarEmail(Email);

    useEffect(() => {
        const createTableAndSetFlag = async () => {
            await createTable();
            setTabelaCriada(true);
        };

        createTableAndSetFlag();
    }, []);

    const handleEnviarPress = () => {
        if (tabelaCriada) {
            inserte_tabela(Email, Senha);
            onChangeEmail('');
            onChangeSenha('');

        } else {
            console.warn('A tabela ainda não foi criada.');
        }
    };

    return (
        <View style={styles.input}>
            <TextInput
                style={styles.texto}
                onChangeText={onChangeEmail}
                value={Email}
                placeholder='Teste@deInsert_Banco.com'
                maxLength={25}
                inputMode='email'
            />
            <View style={styles.texto}>
                <TextInput
                    onChangeText={onChangeSenha}
                    value={Senha}
                    placeholder='Senha'
                    secureTextEntry={!mostrarSenha}
                />
            </View>
            <Pressable onPress={() => setMostrarSenha(!mostrarSenha)}>
                <Text style={styles.button1}>{mostrarSenha ? 'Ocultar' : 'Mostrar'}</Text>
            </Pressable>
            <Pressable onPress={handleEnviarPress}>
                <Text style={styles.button2}>Enviar</Text>
            </Pressable>
            {EmailValido && <Text style={styles.Text}>Endereço de e-mail válido</Text>}
            {!EmailValido && <Text style={styles.errorText}>Endereço de e-mail inválido</Text>}
        </View>
    );
};

export default Insert_Banco;
