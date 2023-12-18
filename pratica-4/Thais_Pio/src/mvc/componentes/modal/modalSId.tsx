import React, { useState } from 'react';
import { Modal, Text, Pressable, View } from 'react-native';
import { styles } from '../styled/styledModalSId';
import SelectId from '../funcoes_db/select.db/select.id';

export default function ModalSId () {
    const [abrirModal, setAbrirModal] = useState(false);
    return (
        <View style={[styles.centralizarModalSId, {top: -110}]}>
            <Pressable
                style={[styles.botaoSId, styles.botaoAbertoSId]}
                onPress={() => setAbrirModal(!abrirModal)}>
                <Text style={styles.textoSId}>Buscar por Id</Text>
            </Pressable>
            <Modal
                animationType="fade"
                visible={abrirModal}
                onRequestClose={() => {
                    setAbrirModal(!abrirModal);
                }}>
                <View style={styles.centralizarModalSId}>
                    <View>
                        <Text style={styles.modalTextoSId}>Buscar por Id</Text>
                        <Pressable
                            style={[styles.botaoSId, styles.botaoFechadoSId]}
                            onPress={() => setAbrirModal(!abrirModal)}>
                            <SelectId/>
                            <Text style={styles.textoSId}>Fechar Tela</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    );
};