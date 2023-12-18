import React, { useState } from 'react';
import { Modal, Text, Pressable, View } from 'react-native';
import { styles } from '../styled/styledModalS';
import BuscarTdUsuarios from '../funcoes_db/select.db/select.all';

export default function ModalS () {
    const [abrirModal, setAbrirModal] = useState(false);
    return (
        <View style={[styles.centralizarModalS, {top: 75}]}>
            <Pressable
                style={[styles.botaoS, styles.botaoAbertoS]}
                onPress={() => setAbrirModal(!abrirModal)}>
                <Text style={styles.textoS}>Listar todos os Usuários</Text>
            </Pressable>
            <Modal
                animationType="fade"
                visible={abrirModal}
                onRequestClose={() => {
                    setAbrirModal(!abrirModal);
                }}>
                <View style={styles.centralizarModalS}>
                    <View>
                        <Text style={styles.modalTextoS}>Listar todos os Usuários</Text>
                        <Pressable
                            style={[styles.botaoS, styles.botaoFechadoS]}
                            onPress={() => setAbrirModal(!abrirModal)}>
                            <BuscarTdUsuarios />
                            <Text style={styles.textoS}>Fechar Tela</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    );
};