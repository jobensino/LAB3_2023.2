import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';

import { Deletar } from 'db/config/requisicoes';
import { InputDeletar, TextoDeletar, BotaoDeletar, FundoDeletar } from './servicos.estilos'


const DeletarCliente:React.ElementType = () => {

  const [id, setId] = useState('');

  let width = "350px", height = "50px";


  return(
    <SafeAreaView>
    <FundoDeletar>
      <InputDeletar width = {width} height = {height}
        onChangeText={setId}
        value={id}
        placeholder="Informe o id do cliente"
        keyboardType = "numeric"    
      />

      <BotaoDeletar width= {width} onPress={() => {Deletar(id),setId('')}}>   
                <TextoDeletar>Deletar</TextoDeletar>
      </BotaoDeletar>
      </FundoDeletar>
      </SafeAreaView>
    );
  };

export {DeletarCliente};
