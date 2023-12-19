import { update_tabela } from "mvc/database/banco_de_dados";
import React, { useState } from "react";
import { styles } from "./update.styled";
import { Pressable, TextInput, View, Text } from "react-native";

const Update_Banco = () => {
    const [id, onChangeid] = React.useState('');
    const [Senha, onChangeSenha] = React.useState('');
    const [mostrarSenha, setMostrarSenha] = useState(false);

    const handleEnviarPress = () => {
        update_tabela(Senha, id);
        onChangeid('');
        onChangeSenha('');
    };

    return (
        <View style={styles.input}>
            <TextInput
                style={styles.texto}
                onChangeText={onChangeid}
                value={id}
                placeholder='Informe o Id'
                keyboardType="phone-pad"
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
        </View>
    );
};

export default Update_Banco;