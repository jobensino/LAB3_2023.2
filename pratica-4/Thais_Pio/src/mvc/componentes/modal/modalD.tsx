import React, { useState } from 'react';
import { Modal, Text, Pressable, View } from 'react-native';
import { styles } from '../styled/styledModalD';
import DeletarUsuario from '../funcoes_db/delet.db/delet';

export default function ModalD () {
    const [abrirModal, setAbrirModal] = useState(false);
    return (
        <View style={[styles.centralizarModalD, {top: 260}]}>
            <Pressable
                style={[styles.botaoD, styles.botaoAbertoD]}
                onPress={() => setAbrirModal(!abrirModal)}>
                <Text style={styles.textoD}>Remover Usuário</Text>
            </Pressable>
            <Modal
                animationType="fade"
                visible={abrirModal}
                onRequestClose={() => {
                    setAbrirModal(!abrirModal);
                }}>
                <View style={styles.centralizarModalD}>
                    <View>
                        <Text style={styles.modalTextoD}>Remover Usuário</Text>
                        <Pressable
                            style={[styles.botaoD, styles.botaoFechadoD]}
                            onPress={() => setAbrirModal(!abrirModal)}>
                            <DeletarUsuario />
                            <Text style={styles.textoD}>Fechar Tela</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    );
};