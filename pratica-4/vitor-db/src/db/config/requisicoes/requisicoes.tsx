import { db } from "db/config/conexao"
import { cliente } from "db/entidades"

const clienteRepository = db.ds.getRepository(cliente)

const Cadastrar = (entidade:any,nome:string,cpf:string,endereco:string)=>{
      
    entidade.name = nome;
    entidade.cpf = cpf;
    entidade.endereco = endereco;
    clienteRepository.save(entidade).then(()=>{console.log("Cliente registrado");alert("Cliente registrado")})
      .catch((erro)=>{console.log(erro);alert("Sistema indisponivel")})
    
}

const Deletar = async (id:string)=>{

    if (!id) {
      alert('Por favor informe o ID!');
      return;
    }

    const deletar = await clienteRepository.findOneBy({
      id: parseInt(id),
    })

    if(deletar == null){
        alert("Cliente não encontrado")
    }else{
      clienteRepository.remove(deletar).then(()=>{console.log("Cliente deletado!!");alert("Cliente deletado!!")})
    .catch((erro)=>{console.log(erro);alert("Sistema indisponivel")})}
    
  }

  const Atualizar = async (entidade:cliente,nome:string,cpf:string,endereco:string)=>{

    entidade.name = nome;
    entidade.cpf = cpf;
    entidade.endereco = endereco;
    clienteRepository.save(entidade).then(()=>{console.log("Cliente atualizado");alert("Cliente atualizado")})
    .catch((erro)=>{console.log(erro);alert("Sistema indisponivel")})
  
}

async function Consultar(pesquisa:number){
 
  const clienteSalvo = await clienteRepository.findOneBy({id: pesquisa!})
    
  return clienteSalvo;
}

async function VerTodos(){

  const clientes = await clienteRepository.find()
  
  return clientes;
}

export{Cadastrar,Deletar,Atualizar,Consultar,VerTodos}