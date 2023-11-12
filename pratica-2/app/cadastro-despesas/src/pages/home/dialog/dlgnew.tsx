import React, { useRef, useState } from 'react';
import {Modal, ModalReply, TDialogProps, TextEdit} from 'libjr';
import { useGlobalContext } from 'state/global.context';
import { useDataService } from 'libdb';
import { Box, Container, MessageError } from './dlgnew.styles';
import { DespesaAttr } from 'model/despesa.model';

const Dlg: React.FC<TDialogProps> = ({open,toggle}) => {

  const {despesa} = useGlobalContext()

  const {service} = useDataService<DespesaAttr>("DespesaDB","Despesas")

  const descricaoRef = useRef("")

  const valorRef = useRef("")
  
  const [isError, setError] = useState(false);

  const onConfirm = () => {

    const valor = parseFloat(valorRef.current.replace(",", "."))

    const descricao = descricaoRef.current

    if(!Number.isNaN(valor)) {

      const item:DespesaAttr = {
        id: despesa.state.items.length + 1,
        descricao: descricao,
        valor: valor,
        data_cadastro: new Date()
      }
      
      despesa.add("dlgnew",item,service)
      
      toggle();

      setError(false);
    } else {
      setError(true);
    }
  }

  const onCancel = () => {

    toggle()

    setError(false)
  }
  const focusItems = ["despesadescricao","despesavalor"]
  
  return (
      <Modal open={open} hide={toggle} title='Novo' focusitems={focusItems}>
          <Container>
            <Box>
                <TextEdit label={'Descrição da despesa'}
                        name={focusItems[0]}
                        placehorlder='Informe descrição:'
                        handleChange={(s: string)=> descricaoRef.current = s} />
            </Box>
            <Box>
                <TextEdit label={'Valor da despesa'}
                        name={focusItems[1]}
                        placehorlder='Informe o valor gasto:'                         
                        handleChange={(s: string)=> valorRef.current = s} />
                  { 
                    isError
                      ? <MessageError>O valor informado é inválido!</MessageError>
                      : ""
                  }
            </Box>
            <ModalReply onConfirm={onConfirm} onCancel={onCancel}/>
          </Container>
      </Modal>
  )
}


export {Dlg}
