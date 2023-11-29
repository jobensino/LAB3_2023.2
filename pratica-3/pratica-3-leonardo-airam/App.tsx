import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Label, Modal, SplitLayout, TextEdit } from './src/components';

const CustomModal = () => {

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const onSave = (onRequestClose: () => void) => {
    console.log("Salvar");
    onRequestClose()
  };

  return (
    <>
      <Button title="Abrir Modal Novo" onPress={openModal} />

      <Modal isOpen={isModalOpen} setOpen={setModalOpen} animationType='fade'>

        <Modal.Header title="Meu Modal" align='center' showCloseButton={true} />

        <Modal.Content>
          <Text>Conteudo do meu Modal. xD</Text>
        </Modal.Content>

        <Modal.Footer align='end'>
          <Modal.ActionButton label='Salvar' onPress={onSave} fill={false} style={{ backgroundColor: '#218a95', color: 'white' }} />
          <Modal.CloseButton label='Fechar' fill={false} />
        </Modal.Footer>

      </Modal>
    </>
  )
}

export default function App() {

  const [nomePersonagem, setNomePersonagem] = useState('');

  return (
    <SafeAreaView style={styles.container}>

        <SplitLayout orientation='vertical' style={{backgroundColor: '#f0f8ff'}}>

          <SplitLayout.Panel sizePercent={10} style={{backgroundColor: '#ff6347'}}>
            <Text>Panel 1</Text>
          </SplitLayout.Panel>

          <SplitLayout.Panel>
            <CustomModal />

            <Label text='Personagem' style={{fontWeight: 'bold', color: '#ff6347'}} />
            <TextEdit value={nomePersonagem} onChange={setNomePersonagem} placeholder='Digite o nome do personagem...' style={{borderColor: '#6495ed', borderColorFocus: '#00bfff'}} />
            <Text>{nomePersonagem}</Text>

          </SplitLayout.Panel>
        </SplitLayout>

      <StatusBar style="auto" />
    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a11515',
    alignItems: 'center',
    justifyContent: 'center',
  },

  layoutContainer: {
    padding: 16
  }
});
