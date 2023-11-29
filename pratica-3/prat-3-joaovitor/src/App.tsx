import { SafeAreaView, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { registerRootComponent } from 'expo';
import { Container} from './App.style';
import { Modal } from './layoutModal';
import { Label } from './label';
import { LayoutSpliter } from './layoutSpliter';
import { TextEdit } from './textEdit';


function App() {

  return (
    <Container>  
     

    {/* 
      
      <TextEdit tipo='number' width='150px' height='30px'/>
      <TextEdit tipo='text' width='200px' height='35px'/>
      
      <Modal width='300px' height='350px'/>
      
      <LayoutSpliter tipo='row' layout='75%'/>
      
      <Label name='CPF'>
        <TextEdit tipo='text' width='190px' height='35px'/>
      </Label>

      <StatusBar style="auto" /> */}
    </Container>
  );
}

export default registerRootComponent(App);

