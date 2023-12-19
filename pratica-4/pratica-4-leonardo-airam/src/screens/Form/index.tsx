import React, { useEffect, useState } from 'react';
import {
  BotaoSalvar,
  Container, Input, Label, TextoBotao,
} from './styles';
import { FormProps } from './types';
import { Genero } from 'entities/Livro/type';
import { useLivroContext } from 'states/livro/context';
import { Picker } from '@react-native-picker/picker';


const Form: React.FC<FormProps> = ({ navigation, route }) => {

  const [state, controller]= useLivroContext("Form");

  const [livroId, setLivroId] = useState<number | undefined>(undefined);
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [genero, setGenero] = useState<Genero | null>(null);

  useEffect(() => {
    if(state.item) {
      setLivroId(state.item.id);
      setTitulo(state.item.titulo);
      setAutor(state.item.autor);
      setGenero(state.item.genero);
    }
  },[])

  const handleSalvar = () => {
    if (!titulo || !autor || !genero) {
      alert('Preencha todos os campos!');
      return;
    }

    controller.save({      
      autor: autor,
      genero: genero,
      titulo: titulo,
      id: livroId
    });

    navigation.pop();
  };

  return (
    <Container>
      <Label>Titulo:</Label>
      <Input
        value={titulo}
        onChangeText={setTitulo}
        placeholder="Digite o título do livro"
      />

      <Label>Autor:</Label>
      <Input
        value={autor}
        onChangeText={setAutor}
        placeholder="Digite o nome do autor"
      />

      <Label>Gênero:</Label>

      <Picker
        selectedValue={genero}
        onValueChange={setGenero}
        mode='dialog'
      >
        <Picker.Item label="Selecione" value={null} />
        {Object.values(Genero).map((opcao, index) => (
          <Picker.Item key={index} label={opcao} value={opcao} />
        ))}
      </Picker>

      <BotaoSalvar onPress={handleSalvar}>
        <TextoBotao>Salvar</TextoBotao>
      </BotaoSalvar>
    </Container>
  );
};

export {
  Form
};