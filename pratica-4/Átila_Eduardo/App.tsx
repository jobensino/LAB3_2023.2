import { View, Text } from 'react-native';
import { styles } from './App_styled';
import Tela from './src/mvc/tela/tela';

export default function App() {
  return (
    <View style={styles.container}>
      <Tela/>
    </View>
  );
}
