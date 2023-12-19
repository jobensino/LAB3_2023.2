import React, { useEffect } from 'react';
import {
  BotaoVoltar,
  Container, DetalheItem, Label, TextoBotao,
} from './styles';
import { DetailsProps } from './types';
import { useLivroContext } from 'states/livro/context';
import { ActionsType } from 'hooks/createReducerContext/actions';
import { LivroController } from 'csr/controllers/LivroController';


const Details: React.FC<DetailsProps> = ({ navigation, route }) => {

  const [state, controller]= useLivroContext("Home");

  useEffect(() => {

    const livroId = route.params?.id as number || null;

    if (livroId) {
      controller.details(livroId);
    }
  }, []);

  return (
    <Container>
      <Label>Título:</Label>
      <DetalheItem>{state.item?.titulo}</DetalheItem>

      <Label>Autor:</Label>
      <DetalheItem>{state.item?.autor}</DetalheItem>

      <Label>Gênero:</Label>
      <DetalheItem>{state.item?.genero}</DetalheItem>

      <Label>Criado em:</Label>
      <DetalheItem>{state.item?.createdAt.toLocaleString()}</DetalheItem>

      <Label>Atualizado em:</Label>
      <DetalheItem>{state.item?.updatedAt.toLocaleString()}</DetalheItem>
      
    </Container>
  );
};

export {
  Details
};