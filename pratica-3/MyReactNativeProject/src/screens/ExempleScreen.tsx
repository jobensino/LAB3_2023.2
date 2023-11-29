import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import LayoutSpliter from '../components/LayoutSpliter';
import TextEdit from '../components/TextEdit';
import Label from '../components/Label';
import LayoutModal from '../components/LayoutModal';

const ExampleScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <>
      <LayoutSpliter vertical>
        <View>
          <Label text="Top Section" />
          <TextEdit placeholder="Enter text here" />
          <Button title="Show Modal" onPress={toggleModal} />
        </View>
        <View>
          <Label text="Bottom Section" />
          <TextEdit placeholder="Another input" />
        </View>
      </LayoutSpliter>

      <LayoutModal visible={isModalVisible} onClose={toggleModal}>
        <Text>Modal Content Here</Text>
      </LayoutModal>
    </>
  );
};

export default ExampleScreen;
