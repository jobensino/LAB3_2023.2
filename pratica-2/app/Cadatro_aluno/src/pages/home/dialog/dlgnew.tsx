import React, { useRef } from 'react';
import {Modal, ModalReply, TDialogProps, TextEdit} from 'libjr';
import { useGlobalContext } from 'state/global.context';
import { CadastroAluno } from 'model/cadastro.model';
import { useDataService } from 'libdb';
import { Box, Container } from './dlgnew.styles';
import livros from 'imagem/0e4185b45d6f97785c218db426ad1afb-icone-de-predio-de-escola-primaria.png';

const Dlg: React.FC<TDialogProps> = ({open,toggle}) => {

  const {cadastro} = useGlobalContext();
  const {service} = useDataService<CadastroAluno>("CadastroDB","CadastroStore")

  const nomeRef = useRef("")
  const matriculaRef = useRef("")
  const cursoRef = useRef("")

  const onConfirm = () => {

    const item:CadastroAluno = {id:cadastro.state.items.length+1,nome:nomeRef.current,matricula:matriculaRef.current,curso:cursoRef.current};
    
    cadastro.add("dlgnew",item,service);
    
    toggle();
  }

  const onCancel = () => toggle();
  const focusItems = ["nome_aluno","matricula_aluno","Curso"];
  
  return (
      <Modal open={open} hide={toggle} title='Cadastro Discente' focusitems={focusItems}>
          <Container>
            <Box>
                <TextEdit  label={'Nome do aluno'}
                        name={focusItems[0]}
                        placehorlder='Informe nome:'                         
                        handleChange={(s: string)=> nomeRef.current = s} />
            </Box>
            <Box>
                <TextEdit  label={'Matricula'}
                        name={focusItems[1]}
                        placehorlder='Informe número de matrícula:'                         
                        handleChange={(s: string)=> matriculaRef.current = s} />
            </Box>
            <Box>
                <TextEdit  label={'Curso'}
                        name={focusItems[2]}
                        placehorlder='Informe o Curso:'                         
                        handleChange={(s: string)=> cursoRef.current = s} />
            </Box>
            <ModalReply onConfirm={onConfirm} onCancel={onCancel}/>
            <img src= {livros} />
          </Container>
      </Modal>
  )
}


export {Dlg}
