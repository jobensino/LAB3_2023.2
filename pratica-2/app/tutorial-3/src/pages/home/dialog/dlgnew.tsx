import React, { useRef } from 'react';
import {Modal, ModalReply, TDialogProps, TextEdit} from 'libjr';
import { useGlobalContext } from 'state/global.context';
import { PlayerScoreAttr } from 'model/player.model';
import { useDataService } from 'db/useDataService';
import { Box, Container } from './dlgnew.styles';

const Dlg: React.FC<TDialogProps> = ({open,toggle}) => {

  const {player} = useGlobalContext();
  const {service} = useDataService<PlayerScoreAttr>("PlayerDB","PlayerStore")

  const nameRef = useRef("")
  const scoreRef = useRef("")

  const onConfirm = () => {

    const item:PlayerScoreAttr = {id:player.state.items.length+1,name:nameRef.current,score:scoreRef.current};
    
    player.add("dlgnew",item,service);
    
    toggle();
  }

  const onCancel = () => toggle();
  const focusItems = ["playername","playerscore"];
  
  return (
      <Modal open={open} hide={toggle} title='Novo' focusitems={focusItems}>
          <Container>
            <Box>
                <TextEdit  label={'Nome do jogador'}
                        name={focusItems[0]}
                        placehorlder='Informe nome:'                         
                        handleChange={(s: string)=> nameRef.current = s} />
            </Box>
            <Box>
                <TextEdit  label={'Pontuação'}
                        name={focusItems[1]}
                        placehorlder='Informe pontuação:'                         
                        handleChange={(s: string)=> scoreRef.current = s} />
            </Box>
            <ModalReply onConfirm={onConfirm} onCancel={onCancel}/>
          </Container>
      </Modal>
  )
}


export {Dlg}
