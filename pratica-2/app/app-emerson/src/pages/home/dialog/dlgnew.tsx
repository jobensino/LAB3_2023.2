import React, { useRef } from 'react';
import {Modal, ModalReply, TDialogProps, TextEdit} from 'libjr';
import { useGlobalContext } from 'state/global.context';
import { PersonageAttr } from 'model/personage.model';
import { useDataService } from 'libdb';
import { Box, Container } from './dlgnew.styles';

const Dlg: React.FC<TDialogProps> = ({open,toggle}) => {

  const {personage} = useGlobalContext();
  const {service} = useDataService<PersonageAttr>("PersonageDB","PersonageStore")

  const nameRef = useRef("")
  const powerRef = useRef("")
  const weakPointRef = useRef("")
  const imageRef = useRef("")

  const onConfirm = () => {

    const item:PersonageAttr = {id:personage.state.items.length+1,name:nameRef.current,power:powerRef.current, weakPoint:weakPointRef.current, image:imageRef.current};
    
    personage.add("dlgnew",item,service);
    
    toggle();
  }

  const onCancel = () => toggle();
  
  const focusItems = ["personagename","personagepower","personageweakpoint","personageimage"];
  
  return (
      <Modal open={open} hide={toggle} title='Novo' focusitems={focusItems}>
          <Container>
            <Box>
                <TextEdit  label={'Nome do Personagem'}
                        name={focusItems[0]}
                        placehorlder='Informe nome:'                         
                        handleChange={(s: string)=> nameRef.current = s} />
            </Box>
            <Box>
                <TextEdit  label={'Poder'}
                        name={focusItems[1]}
                        placehorlder='Informe o poder do personagem:'                         
                        handleChange={(s: string)=> powerRef.current = s} />
            </Box>
            <Box>
                <TextEdit  label={'Ponto Fraco'}
                        name={focusItems[2]}
                        placehorlder='Informe o ponto fraco:'                         
                        handleChange={(s: string)=> weakPointRef.current = s} />
            </Box>
            <Box>
                <TextEdit  label={'Link da imagem'}
                        name={focusItems[3]}
                        placehorlder='Informe o link da imagem:'                         
                        handleChange={(s: string)=> imageRef.current = s} />
            </Box>
            <ModalReply onConfirm={onConfirm} onCancel={onCancel}/>
          </Container>
      </Modal>
  )
}


export {Dlg}
