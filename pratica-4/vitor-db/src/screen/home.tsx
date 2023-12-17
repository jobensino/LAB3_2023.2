import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container, Title } from './styles';
import { Button } from 'cp/button';
import { THomeStackParam } from 'navigation/types';


const Home: React.FC = () => {

  const navigation = useNavigation<THomeStackParam>();
  
  return (
    <Container>
        <Title>Banco de Clientes</Title>
        <Button caption="Novo Cliente" handleClick={()=>navigation.navigate('register')} />
        <Button caption="Visualizar Cadastros" handleClick={()=>navigation.navigate('showall')} />
        <Button caption="Consultar Cliente" handleClick={()=>navigation.navigate('show')} />
        <Button caption="Atualizar Cliente" handleClick={()=>navigation.navigate('update')} />
        <Button caption="Excluir Cliente" handleClick={()=>navigation.navigate('delete')} />
    </Container>
  );
};

export {Home}