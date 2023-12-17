import { SafeAreaView } from "react-native"
import { cliente } from "../entidades"
import { InputVer, TextoVer, BotaoVer, TextoBotaoVer, FundoVer, ContainerVer } from "./servicos.estilos"
import { useEffect, useState } from "react"

import { Consultar } from "db/config/requisicoes"

const VerCliente:React.ElementType = () => {

    const [dados,setDados] = useState<cliente|null>(null)
    const [pesquisa,setPesquisa] = useState<number|null>(null);
    const [id,setId] = useState('');
    const [retorno,setRetorno] = useState(0);

    let width = "350px", height = "50px";

    useEffect( ()=> {
  
        Consultar(pesquisa!).then( 
            (data)=>{

                setDados(data)  
                if(data != null && pesquisa != null ){
                    setRetorno(1)
                    
                }else if(data == null && pesquisa != null){
                    alert("Cliente não encontrado")
                    
            }}).catch( (erro)=> {console.log("Erro na busca de dados!!");console.log(erro);alert("Sistema indisponivel")} );
    
    },[pesquisa]); 

   switch(retorno){

    case 0: return (
        <SafeAreaView>
        <FundoVer>
            <InputVer 
                width= {width} height = {height}
                onChangeText={setId}
                value={id}
                placeholder="Informe o id do cliente"
                keyboardType = "numeric"
            />

            <BotaoVer width= {width} onPress={
                () => {
                    if(id){
                        setPesquisa(parseInt(id));
                        setId('');
                    }else{
                        alert('Por favor preencha o id do cliente!!');
                    }
                    }}>   
                <TextoBotaoVer>Procurar</TextoBotaoVer>
            </BotaoVer>
        </FundoVer>
        </SafeAreaView>
        )

    case 1: return(
        <SafeAreaView>
        <FundoVer>
            <ContainerVer>
                <TextoVer>Nome: {dados?.name}</TextoVer>
                <TextoVer>CPF: {dados?.cpf}</TextoVer>
                <TextoVer>Endereço: {dados?.endereco}</TextoVer>
            </ContainerVer>
            <BotaoVer width= {width} onPress={() => {setDados(null);setRetorno(0);setPesquisa(null)}}>   
                <TextoBotaoVer>Retornar</TextoBotaoVer>
            </BotaoVer>
        </FundoVer>
        </SafeAreaView>
        )}}

export {VerCliente};