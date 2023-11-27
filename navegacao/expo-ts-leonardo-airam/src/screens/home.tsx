import React from 'react';
import { styles } from './styles';
import { Text, View } from 'react-native';

const Home: React.FC = () => {

    return (
      <View style={styles.container}>
          <Text style={styles.title}>Home</Text>
      </View>
    );
};

export {Home}