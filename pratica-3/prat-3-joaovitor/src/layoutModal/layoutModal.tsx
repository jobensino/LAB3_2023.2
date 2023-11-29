import React, {useState} from 'react';
import {ScrollView,SafeAreaView} from 'react-native';

import { Container,Botao,TextoBotao} from './layoutModal.style';
import { ModalText } from '../Conteudos';

interface tipoModal{

    width:string,
    height:string
  
  }

const Modal:React.ElementType<tipoModal> = ({width,height}) => {
  
    const [modalEstado, setModalEstado] = useState(false);
    
    if(modalEstado === false){
        return(
        <SafeAreaView>
            <Botao width ={width} onPress={() => setModalEstado(!modalEstado)}>   
                <TextoBotao>Informações</TextoBotao>
            </Botao>
        </SafeAreaView>
        );
    }else{

    return(
        <SafeAreaView>      
            
            <Container width={width} height = {height}>
                <ScrollView>
                    <ModalText/>
                </ScrollView>
            </Container>
        
            <Botao width= {width} onPress={() => setModalEstado(!modalEstado)}>   
                <TextoBotao>Fechar</TextoBotao>
            </Botao>

        </SafeAreaView>
    );
    }


  };
  
export {Modal};