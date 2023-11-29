import React from 'react';
import {ScrollView} from 'react-native';
import { Container,ViewSuperior,ViewInferior,ViewErro,TextoErro} from './layoutSpliter.style';
import Modelos from './layoutSpliterModelos';
import { SplitText } from '../Conteudos';

interface tipoSpliter{

  tipo:string,
  layout:string

}


const LayoutSpliter:React.ElementType<tipoSpliter> = ({tipo,layout}) => {

  let valores:string[] = Modelos(tipo,layout)!; // (row/column) , (10%/25%/50%/75%/90%)

  if(valores[0] === "-1"){

    return(
       <ViewErro><TextoErro>{valores[1]}</TextoErro></ViewErro>
    )

  }else{
  
    return (
    <Container flexD={valores[0]}>
          
          <ViewSuperior width={valores[1]} height={valores[2]}> 
            <ScrollView>
                <SplitText/>
            </ScrollView>
          </ViewSuperior>

          <ViewInferior width={valores[3]} height={valores[4]}>       
            <ScrollView>
                <SplitText/>
            </ScrollView>
          </ViewInferior>
      </Container>
  
  
  );
    }
};

export {LayoutSpliter}