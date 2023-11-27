import React from 'react';
import { styles } from './styles';
import { Text, View } from 'react-native';

const About: React.FC = () => {

    return (
      <View style={styles.container}>
          <Text style={styles.title}>About</Text>
      </View>
    );
};

export {About}