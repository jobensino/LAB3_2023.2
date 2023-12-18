import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { styles } from './src/app/App.styled';
import React from 'react';
import TelaInicial from './src/mvc/tela/telaInicial';

export default function App() {
  return (
    <View style={styles.container}>
      <TelaInicial/>
      <StatusBar style="dark"/>
    </View>
  );
}
