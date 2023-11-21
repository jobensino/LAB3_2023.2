import React, { useRef, useState } from "react";
import { styles as sy } from './estilo';
import { TextEdit, Buttonice, createButtonMakup } from "libjr";

import { useDataService } from "libdb";
import { DadosClientesAtr } from "./cliente";
import { Tela } from "./telaInicio";


const Cadastro :React.FC = () => {

    const nomeRef = useRef("");
    const cpfRef = useRef("");
    const telefoneRef = useRef("");
    const [estado,setEstado] = useState(true);

    const {service} = useDataService<DadosClientesAtr>("ClientesDB","DadosClientes")
    const btmkp =  createButtonMakup({fg:'#000000',bg:'#D3D0CF',hg:'#ffff'},'rounded') 

    const ButtonCadastro = () => {
      return <Buttonice sz={"270px"} makup={btmkp} onClick={()=> {Cadastrar()}}>CADASTRAR</Buttonice>
    }

    const Cadastrar = async () => {

        const item:DadosClientesAtr = {id:(await service.load()).length+1,nome:nomeRef.current,cpf:cpfRef.current,telefone:telefoneRef.current};
        service.insert(String((await service.load()).length+1),item);
        setEstado(!estado);
        
    }

        switch(estado){

            case true:
            return(   
        <sy.fundo>
            <sy.container>
                <h1>Cadastro de Clientes</h1>
                <TextEdit 
                
                name="Nome" 
                label="Nome"
                handleChange={(s: string)=> nomeRef.current = s}></TextEdit>
                <br></br>
               
                <TextEdit 
                name="CPF" 
                label="CPF"
                handleChange={(s: string)=> cpfRef.current = s}></TextEdit>
                <br></br>
               
                <TextEdit 
                name="Telefone" 
                label="Telefone"
                handleChange={(s: string)=> telefoneRef.current = s}></TextEdit>
                <br></br>
                
                <ButtonCadastro></ButtonCadastro>
                <br></br>
            </sy.container>
        </sy.fundo>
        )
        case false:
            return(
    
                <Tela></Tela>
                
            );
            break;
    
    }

}

export {Cadastro};

    