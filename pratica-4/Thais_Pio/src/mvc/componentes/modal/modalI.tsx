import React, { useState } from 'react';
import { Modal, Text, Pressable, View } from 'react-native';
import CadastrarUsuario from '../funcoes_db/insert_db/insert';
import { styles } from '../styled/styledModalI';

export default function ModalI (){
    const [abrirModal, setAbrirModal] = useState(false);
    return (
        <View style={[styles.centralizarModalI, {top: 70}]}>
            <Pressable
                style={[styles.botaoI, styles.botaoAbertoI]}
                onPress={() => setAbrirModal(!abrirModal)}>
                <Text style={styles.textoI}>Cadastrar Usuário</Text>
            </Pressable>
            <Modal
                animationType="fade"
                visible={abrirModal}
                onRequestClose={() => {
                    setAbrirModal(!abrirModal);
                }}>
                <View style={styles.centralizarModalI}>
                    <View>
                        <Text style={styles.modalTextoI}>Cadastro de Usuário</Text>
                        <Pressable
                            style={[styles.botaoI, styles.botaoFechadoI]}
                            onPress={() => setAbrirModal(!abrirModal)}>
                            <CadastrarUsuario />
                            <Text style={styles.textoI}>Fechar Tela</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

