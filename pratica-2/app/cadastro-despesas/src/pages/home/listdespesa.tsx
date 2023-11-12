import { useDataService } from "libdb";
import { DespesaAttr } from "model/despesa.model";
import { useState, useEffect } from "react";
import { useGlobalContext } from "state/global.context";
import { Container, Table, Titulo } from "./listdespesa.styles";
const ListDespesas:React.FC = () => {

    const {despesa} = useGlobalContext();

    const {service} = useDataService<DespesaAttr>("DespesaDB","Despesas")
    
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_,forceUpdade] = useState(false)
    
    useEffect( ()=> {
      despesa.load("despesas",service,()=>forceUpdade((prev)=>!prev));
    },[])
  
    const formatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });

    return (
        <Container>
              <Titulo>Listagem de Despesas</Titulo>
              <br />
              <Table>
                <thead style={{textAlign: "left"}}>
                  <tr>
                      <th>Descrição</th>
                      <th>Valor</th>
                      <th>Data</th>
                  </tr>
                </thead>
                <tbody>
                  {despesa.state.items && despesa.state.items.map((item,index)=> {
                    return <tr key={index}>
                                <td>{item.descricao}</td>
                                <td>{formatter.format(item.valor)}</td>
                                <td>{item.data_cadastro.toLocaleDateString("pt-BR")}</td>
                            </tr>
                  })}   
                </tbody>
              </Table>        
        </Container>
    )
  }

  export {ListDespesas}