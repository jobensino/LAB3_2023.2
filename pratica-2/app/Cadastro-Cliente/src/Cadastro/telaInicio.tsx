import {useState} from 'react'
import { Cadastro } from "./cadastro";
import { styles as sy } from './estilo';
import { Buttonice, createButtonMakup } from "libjr";


const Tela:React.FC = () => {

    const [estado,setEstado]= useState(false);
    
    const btmkp =  createButtonMakup({fg:'#000000',bg:'#D3D0CF',hg:'#ffff'},'rounded') 
    
    const ButtonCadastro = () => {
      return <Buttonice sz={"270px"} makup={btmkp} onClick={()=> setEstado(!estado)}>Cadastrar Cliente</Buttonice>
    }

    switch(estado){

        case false:
   
        return(

            <sy.fundo>
            <sy.container>
                <sy.texto>Cadastro de Clientes</sy.texto>
                <ButtonCadastro></ButtonCadastro>
                
            </sy.container>
            </sy.fundo>
            
        );
        break;

        case true:
            
            return(
            <Cadastro></Cadastro> 
            
            );

        break;

}
}


export {Tela};