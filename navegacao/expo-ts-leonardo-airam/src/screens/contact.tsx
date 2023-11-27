import React from 'react';
import { styles } from './styles';
import { Text, View } from 'react-native';

const Contact: React.FC = () => {

    return (
      <View style={styles.container}>
          <Text style={styles.title}>Contact</Text>
      </View>
    );
};

export {Contact}