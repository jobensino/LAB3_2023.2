import React, { useEffect, useState } from 'react';
import {SafeAreaView} from 'react-native';

import { InputEdit, BotaoEdit, TextoBotaoEdit, FundoEdit } from "./servicos.estilos"
import { cliente } from "../entidades"
import { Atualizar, Consultar } from 'db/config/requisicoes';

const EditarCliente:React.ElementType = () => {

   const [dados,setDados] = useState<cliente|null>(null)
   const [pesquisa,setPesquisa] = useState<number|null>(null);
   const [id,setId] = useState('');
   const [nome,setNome] = useState('');
   const [cpf,setCpf] = useState('');
   const [endereco,setEndereco] = useState('');
   const [retorno,setRetorno] = useState(0);

   let width = "350px";

   useEffect( ()=> {

    Consultar(pesquisa!).then( 
       (data)=>{
           console.log("CLIENTE ff: ",data);
           setDados(data)
           
           if(data != null && pesquisa != null )
           {
              setNome(data?.name!)
              setCpf(data?.cpf!)
              setEndereco(data?.endereco!)   
              setRetorno(1)

          }else if(data == null && pesquisa != null){
               alert("Cliente não encontrado")
           }}
       
       ).catch( (erro)=> {console.log("Erro na busca de dados!!");console.log(erro); alert("Sistema indisponivel")} );

   },[pesquisa]); 

  switch(retorno){

   case 0: return (
  <SafeAreaView>
   <FundoEdit>
       <InputEdit 
           width= {width} 
           onChangeText={setId}
           value={id}
           placeholder="Informe o id do cliente"
           keyboardType = "numeric"
       />

       <BotaoEdit width= {width} onPress={
           () => {
               if(id){
                   setPesquisa(parseInt(id));
                   setId('');
               }else{
                   alert('Por favor preencha o id do cliente!!');
               }
               }}>   
           <TextoBotaoEdit>Procurar</TextoBotaoEdit>
       </BotaoEdit>
   </FundoEdit>
   </SafeAreaView>
   )

   case 1: return(
    <SafeAreaView>
       <FundoEdit>
          <InputEdit 
            width= {width} 
            onChangeText={setNome}
            value={nome}
            placeholder="Informe o id do cliente"
       />
          <InputEdit 
            width= {width} 
            onChangeText={setCpf}
            value={cpf}
            placeholder="Informe o cpf do cliente"
            keyboardType = "numeric"
       />
          <InputEdit 
            width= {width} 
            onChangeText={setEndereco}
            value={endereco}
            multiline = {true}
            placeholder="Informe o endereço do cliente"
       />
           
          <BotaoEdit width= {width} onPress={() => {
            if(!nome || !cpf || !endereco ){
              alert("Por favor preencha todos os campos")
            }else{
              Atualizar(dados!,nome,cpf,endereco)
              setDados(null);
              setRetorno(0);
              setPesquisa(null);
            }}
            }>   
               <TextoBotaoEdit>Atualizar</TextoBotaoEdit>
           </BotaoEdit>
       </FundoEdit>
       </SafeAreaView>
       )
    }}

export {EditarCliente};

