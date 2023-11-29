import React from 'react';
import {Pressable,SafeAreaView } from 'react-native';
import { Container, TextoLabel } from './label.style';

interface tipoTexto {
  
  children:any,
  name:string

}


const Label: React.ElementType<tipoTexto> = ({children,name}) => {
  
  return (
    <SafeAreaView>
        <Pressable hitSlop={{top: 50, bottom: 50, left: 25, right: 25}} onPress={ () => {console.warn("Clicou em "+String(name))}}>
          <Container>
            <TextoLabel>{name}</TextoLabel> 
              {children}
            </Container>
      </Pressable>
    </SafeAreaView>
  )  
  
}

export {Label}