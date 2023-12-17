import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';

import { cliente } from "../entidades"
import { Cadastrar } from 'db/config/requisicoes';
import { InputAdicionar, TextoAdicionar, BotaoAdicionar, FundoAdicionar } from './servicos.estilos'

const AdicionarCliente:React.ElementType = () => {
  
  const novoCliente = new cliente()

  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [endereco, setEndereco] = useState('');

  let width = "350px";

  return(
    <SafeAreaView>
    <FundoAdicionar>
      <InputAdicionar width = {width} 
        onChangeText={setNome}
        value={nome}
        multiline = {true}
        placeholder="Informe o nome"       
      />
  
      <InputAdicionar width = {width} 
        onChangeText={setCpf}
        value={cpf}
        multiline = {true}
        placeholder="Informe o cpf"
        keyboardType="numeric"
      />

      <InputAdicionar width = {width} 
        onChangeText={setEndereco}
        value={endereco}
        multiline = {true}
        placeholder="Informe o endereco"       
        />

      <BotaoAdicionar width= {width} onPress={() => {
        if (!nome || !cpf || !endereco) {         
          alert('Por favor preencha todos os dados!');
          return;

        }else{
          Cadastrar(novoCliente,nome,cpf,endereco),setNome(''),setCpf(''),setEndereco('')}}}>

      <TextoAdicionar>Cadastrar</TextoAdicionar> 
      </BotaoAdicionar>

    </FundoAdicionar>
    </SafeAreaView>
    );
  };

export {AdicionarCliente};
