import React, { useState } from 'react';
import { Modal, Text, Pressable, View } from 'react-native';
import { styles } from '../styled/styledModalU';
import AtualizarDados from '../funcoes_db/updat.db/updat';

export default function ModalU () {
    const [abrirModal, setAbrirModal] = useState(false);
    return (
        <View style={[styles.centralizarModalU, {top: 440}]}>
            <Pressable
                style={[styles.botaoU, styles.botaoAbertoU]}
                onPress={() => setAbrirModal(!abrirModal)}>
                <Text style={styles.textoU}>Atualizar Usuário</Text>
            </Pressable>
            <Modal
                animationType="fade"
                visible={abrirModal}
                onRequestClose={() => {
                    setAbrirModal(!abrirModal);
                }}>
                <View style={styles.centralizarModalU}>
                    <View>
                        <Text style={styles.modalTextoU}>Atualizar Usuário</Text>
                        <Pressable
                            style={[styles.botaoU, styles.botaoFechadoU]}
                            onPress={() => setAbrirModal(!abrirModal)}>
                            <AtualizarDados />
                            <Text style={styles.textoU}>Fechar Tela</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    );
};