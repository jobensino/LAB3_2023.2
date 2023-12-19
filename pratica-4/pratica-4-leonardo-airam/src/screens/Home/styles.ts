import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 16px;
`;

export const LivroItem = styled.View`
  padding: 16px;
  margin-bottom: 8px;
  background-color: #e0e0e0;
  border-radius: 8px;
`;

export const Titulo = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const BotoesContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 8px;
`;

export const BotaoEditar = styled.Text`
  color: blue;
  margin-right: 8px;
`;

export const BotaoRemover = styled.Text`
  color: red;
  margin-right: 8px;
`;

export const BotaoVisualizar = styled.Text`
  color: green;
`;

export const MensagemVazia = styled.Text`
  font-size: 16px;
  color: gray;
  text-align: center;
  margin-top: 16px;
`;
