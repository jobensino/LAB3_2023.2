import { StatusBar } from 'expo-status-bar';
import { registerRootComponent } from 'expo';
import { Container,Text } from './App.style';
import { Button } from './cp/button';
import React from 'react';

function App() {
  return (
    <Container>
      <Text>Hello!!</Text>
      <Button bg="#2DB814">Save</Button>
      <Button bg="#F4470D">Close</Button>
      <StatusBar style="auto" />
    </Container>
  );
}

export default registerRootComponent(App);

