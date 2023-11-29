import { registerRootComponent } from 'expo';
import { Text } from './App.style';
import { Modal } from './cp/modal/modal';
import React, {useState} from 'react';
import { Button } from './cp/button';
import { Label } from './cp/label';
import { TextField } from './cp/textField/textField';
import { SplitBoard } from './cp/split/split';
function App() {
  
  const [open, setOpen] = useState(false);
  const [value, onChangeText] = React.useState('Vitoria MAIOR DO NORDESTE');
  return (
    <>
    
        <SplitBoard direcao='linha' size='50%' zona1={ 
          <Button onPress={()=>setOpen(true)}>Abrir</Button>
          
        } zona2={
          <>
              <TextField maxLength={40} numberLines={2} onChangeText={(text)=>onChangeText(text)} value={value} styles={{background:'#00ff00',color:'#ffffff'}}></TextField>
            <Label bgColor='#00ff' color='#000000' texto='Emerson Gabriel'/>
          </>
        } />
        <Modal isOpen={open} setModal={()=>setOpen(!open)} title={'teste'} children={ <Text>Emerson Teste</Text> }/>
    </>
   
  );
}

export default registerRootComponent(App);

