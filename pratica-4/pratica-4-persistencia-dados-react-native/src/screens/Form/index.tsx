import React, { useEffect, useState } from 'react';
import {
  BotaoSalvar,
  Container, Input, Label, TextoBotao,
} from './styles';
import { FormProps } from './types';
import { Genero } from 'entities/Livro/type';
import { useLivroContext } from 'states/livro/context';
import { Picker } from '@react-native-picker/picker';
import { LivroController } from 'csr/controllers/LivroController';


const Form: React.FC<FormProps> = ({ navigation, route }) => {

  const {state, dispatch}= useLivroContext("Form");

  const _controller = new LivroController(dispatch);

  const [livroId, setLivroId] = useState<number | undefined>(undefined);
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [genero, setGenero] = useState<Genero | null>(null);

  useEffect(() => {

    const livroId = route.params?.id as number || null;

    if (livroId != null) {

      setLivroId(livroId!);

      navigation.setOptions({title: 'Editar'})
      
      _controller.details(livroId);

      if(state.item != null) {
        setTitulo(state.item.titulo);
        setAutor(state.item.autor);
        setGenero(state.item.genero);
      }

    }
  }, []);

  const handleSalvar = () => {
    if (!titulo || !autor || !genero) {
      alert('Preencha todos os campos!');
      return;
    }

    _controller.save({      
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