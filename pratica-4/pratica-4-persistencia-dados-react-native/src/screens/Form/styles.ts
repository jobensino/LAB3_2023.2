import { Text, TextInput, TouchableOpacity } from 'react-native';
import { View } from 'react-native';
import styled from 'styled-components/native';


export const Container = styled(View)`
  flex: 1;
  padding: 16px;
`;

export const Label = styled(Text)`
  font-size: 18px;
  margin-bottom: 8px;
`;

export const Input = styled(TextInput)`
  height: 40px;
  border-width: 1px;
  border-color: #ccc;
  padding: 8px;
  margin-bottom: 16px;
`;

export const BotaoSalvar = styled(TouchableOpacity)`
  background-color: #3498db;
  padding: 10px;
  border-radius: 5px;
  align-items: center;
`;

export const TextoBotao = styled(Text)`
  color: white;
  font-size: 16px;
`;