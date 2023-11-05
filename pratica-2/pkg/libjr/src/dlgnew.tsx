import React, { useRef } from 'react';
import {Modal, ModalReply, TDialogProps, TextEdit} from './lib';
import { styled } from 'styled-components';


const Dlg: React.FC<TDialogProps> = ({open,toggle}) => {

  const name1Ref = useRef("")
  const name2Ref = useRef("")

  const onConfirm = () => toggle();
  const onCancel = () => toggle();
  const focusItems = ["name1","name2"]
  return (
    <>

      <Modal open={open} hide={toggle} title='Novo' freeze={true} focusitems={focusItems}>
        <Box>
                <TextEdit  label={'Nome:'}
                        name={focusItems[0]}
                        placehorlder='Informe nome:' 
                        handleChange={s=>name1Ref.current = s}/>
                <TextEdit  label={'Nome:'}
                        name={focusItems[1]}
                        placehorlder='Informe nome:' 
                        handleChange={s=>name2Ref.current = s}/>        
                <ModalReply onConfirm={onConfirm} onCancel={onCancel}/>
        </Box>
      </Modal>

    </>
  )
}

interface BoxProps {
  w?: string,
  h?: string,
  bg?: string,
  fg?: string,
}

const Box = styled.div<BoxProps>`
    display: flex;
    flex-direction: column;
    
    width: ${ p => p.w ? p.w : '100%'}; 
    height: ${ p => p.h ? p.h : '100%'};

    background-color: ${ p => p.bg ? p.bg : 'transparent'}; 

    min-height: 1rem;
`;

export {Dlg}
