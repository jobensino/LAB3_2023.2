
import React, { useState } from "react";
import { styles } from "./delete.styled";
import { Pressable, TextInput, View, Text } from "react-native";
import { delete_tabela } from "mvc/database/banco_de_dados";

const Delete_Banco = () => {
    const [id, onChangeid] = React.useState('');

    const handleEnviarPress = () => {
        delete_tabela(id);
        onChangeid('');
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
            <Pressable onPress={handleEnviarPress}>
                <Text style={styles.button1}>Enviar</Text>
            </Pressable>
        </View>
    );
};

export default Delete_Banco;