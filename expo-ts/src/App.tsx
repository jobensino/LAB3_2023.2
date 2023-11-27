import { Text } from 'react-native';
import { registerRootComponent } from 'expo';
import { Container } from './App.styles';
import { Button } from './cp/button';

const App = () => {

  return (
  <Container>
      <Button caption="Clique-me" handleClick={()=>alert("clicou")}/>
      <Text >React Native</Text>
  </Container>  );
}

export default registerRootComponent(App);