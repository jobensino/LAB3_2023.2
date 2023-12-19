import { Text, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(View)`
  flex: 1;
  padding: 16px;
`;

export const Label = styled(Text)`
  font-size: 18px;
  margin-bottom: 8px;
`;

export const DetalheItem = styled(Text)`
  font-size: 16px;
  margin-bottom: 16px;
`;

export const BotaoVoltar = styled(TouchableOpacity)`
  background-color: #3498db;
  padding: 10px;
  border-radius: 5px;
  align-items: center;
  margin-top: 16px;
`;

export const TextoBotao = styled(Text)`
  color: white;
  font-size: 16px;
`;