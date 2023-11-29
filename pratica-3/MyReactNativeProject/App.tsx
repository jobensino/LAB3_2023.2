import React, { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import LayoutSpliter from './src/components/LayoutSpliter';
import LayoutModal from './src/components/LayoutModal';
import TextEdit from './src/components/TextEdit';
import Label from './src/components/Label';

const App = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <LayoutSpliter vertical={true} firstSectionSize="30%" secondSectionSize="70%">
        <View>
          <Label text="Top Section" textColor="blue" />
          <TextEdit placeholder="Type here..." />
        </View>
        <View>
          <Label text="Bottom Section" textColor="green" />
          <TextEdit placeholder="Enter something..." />
        </View>
      </LayoutSpliter>

      <Button title="Show Modal" onPress={toggleModal} />

      <LayoutModal visible={isModalVisible} onClose={toggleModal}>
        <Label text="This is a modal!" textColor="purple" />
      </LayoutModal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default App;
