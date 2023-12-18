import { Text, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';


export const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.View`
  background-color: white;
  padding: 16px;
  border-radius: 8px;
  width: 300px;
`;

export const Mensagem = styled.Text`
  margin-bottom: 16px;
`;

export const Botao = styled.TouchableOpacity<{ confirmar?: boolean }>`
  margin-top: 8px;
  padding: 8px;
  border-radius: 4px;
  background-color: ${(props) => (props.confirmar ? 'red' : 'gray')};
`;

export const TextoBotao = styled.Text`
  color: white;
  text-align: center;
`;
