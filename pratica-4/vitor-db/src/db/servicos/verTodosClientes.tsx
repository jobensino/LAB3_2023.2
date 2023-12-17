import { cliente } from "../entidades"
import { ScrollView, SafeAreaView } from "react-native"
import { useEffect, useState } from "react"

import { FundoVerTodos, TextoVerTodos,ContainerTodos,TextoAlert } from "./servicos.estilos"
import { VerTodos } from "db/config/requisicoes"

const VerTodosClientes:React.ElementType= () => {

    const [dados,setDados] = useState<cliente[]|null>(null)

    useEffect( ()=> {

        VerTodos().then( (data)=>{console.log("Consulta realizada");setDados(data)})
            .catch((erro)=>{console.log(erro);alert("Sistema indisponivel")})

   },[]) 

    if(dados?.length == 0 || dados == null){

        return(<FundoVerTodos><TextoAlert>Não há clientes Cadastrados</TextoAlert></FundoVerTodos>)

    }else{
        return (
        <SafeAreaView>
        <FundoVerTodos>
            <ScrollView>
            {dados.map((cliente,id)=>( 
            <ContainerTodos key={id}> 
                <TextoVerTodos>ID: {cliente.id}</TextoVerTodos>
                <TextoVerTodos>Nome: {cliente.name}</TextoVerTodos>
                <TextoVerTodos>CPF: {cliente.cpf}</TextoVerTodos>
                <TextoVerTodos>Endereço: {cliente.endereco}</TextoVerTodos>
                </ContainerTodos>))}
            </ScrollView>
        </FundoVerTodos>
        </SafeAreaView>
        )
    }
}

export {VerTodosClientes};