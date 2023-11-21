import { useDataService } from "libdb";
import { CadastroAluno } from "model/cadastro.model";
import { useState, useEffect } from "react";
import { useGlobalContext } from "state/global.context";
import {Img, styles as sy} from './home.styles'
import imagem from 'imagem/5351069.png'

const ListarCadastro:React.FC = () => {
    const {cadastro} = useGlobalContext();
    const {service} = useDataService<CadastroAluno>("CadastroDB","CadastroStore")
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_,forceUpdade] = useState(false)
    
    useEffect( ()=> {
      cadastro.load("cadastroaluno",service,()=>forceUpdade((prev)=>!prev));
    },[])
  
    return (
        <sy.column>
        {cadastro.state.items && cadastro.state.items.map((item,index)=><sy.box key={index}>{item.nome}-{item.matricula}-{item.curso} </sy.box>)}
        <Img src={imagem} />            
        </sy.column>
    )
  }

  export {ListarCadastro}