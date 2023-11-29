import React from 'react';
import { Modal, View, Button } from 'react-native';

interface LayoutModalProps {
  visible: boolean;
  onClose: () => void;
  backgroundColor?: string;
  children?: React.ReactNode;
}

const LayoutModal: React.FC<LayoutModalProps> = ({ children, visible, onClose, backgroundColor = 'white' }) => {
  return (
    <Modal
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor }}>
        {children}
        <Button title="Close" onPress={onClose} />
      </View>
    </Modal>
  );
};

export default LayoutModal;
