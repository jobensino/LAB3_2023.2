import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container, Title } from './styles';
import { Button } from 'cp/button';
import { THomeStackParam } from 'navigation/types';

const Home: React.FC = () => {

  const navigation = useNavigation<THomeStackParam>();
  
  return (
    <Container>
        <Title>Home</Title>
        <Button caption=" Novo cadastro      " handleClick={()=>navigation.navigate('register')} />
        <Button caption=" Visualizar todos   " handleClick={()=>navigation.navigate('showall')} />
        <Button caption=" Visualizar         " handleClick={()=>navigation.navigate('show')} />
        <Button caption=" Atualizar cadastro " handleClick={()=>navigation.navigate('update')} />
        <Button caption=" Excluir cadastro   " handleClick={()=>navigation.navigate('delete')} />
    </Container>
  );
};

export {Home}