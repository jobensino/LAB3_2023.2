import React from 'react';
import {SafeAreaView} from 'react-native';
import { Container, Texto } from './textEdit.style';

interface tipoInput {

  tipo:string,
  width:string,
  height:string,

}

const TextEdit:React.ElementType<tipoInput> = ({tipo,width,height}) => {
  
  const [text, setText] = React.useState('');
  const [number, setNumber] = React.useState('');

  if(tipo === 'text'){
    return(
    <SafeAreaView>
      
    <Container width = {width} height = {height}
        onChangeText={setText}
        value={text}
        placeholder="Informe o nome"
      />
      </SafeAreaView>
    );

  }else if(tipo === 'number'){
      return (
        <SafeAreaView>
        <Container width = {width} height = {height}
          onChangeText={setNumber}
          value={number}
          placeholder="Informe o cpf"
          keyboardType="numeric"
        />
        
      </SafeAreaView>
    );
  }else{
    return <SafeAreaView><Texto>Erro no tipo de entrada de dados !! Tipos aceitos: text e number</Texto></SafeAreaView>
  }

;
};

export {TextEdit};