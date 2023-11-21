import React, {  } from 'react';
import { Buttonice, SplitBoard, Toolbar, createButtonMakup } from 'libjr';

import {styles as sy} from './home.styles'
import { Dialog } from './dialog/dialog';
import { ModalProps } from './dialog/dialog.types';
import { ListPersonage } from './listPersonage';
import { useModal } from 'libjr';

const DesktopArea:React.FC<ModalProps> = ({open,toggle}) => {

  return (
      <sy.box>
        <ListPersonage />
        <Dialog open={open} toggle={toggle}/>
      </sy.box>      
  )
}

const Leftbar:React.FC = () => {

  const mktoolbar = {fg: "#FFFFFF",bg: "#323232",alpha: .8,sz: "2.5rem"}

  return <Toolbar align={"vertical"} makup={mktoolbar} />
}

const Desktop:React.FC<ModalProps> = ({open,toggle}) => {
  const szLeftBar = '3rem';
  return <SplitBoard sz={szLeftBar} dir='col' one={<Leftbar />} two={<DesktopArea open={open} toggle={toggle}/>}/>
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Headerbar:React.FC<ModalProps> = ({toggle}) => {
  const mktoolbar = {fg: "#FFFFFF",bg: "#323232",alpha: .8,sz: "2.5rem"}
  const btmkp =  createButtonMakup({fg:'#F1EFF1',bg:'#3c342e',hg:'#f80707'},'rounded') 

  const ScoreButton = () => {
    return <Buttonice sz={"200px"} makup={btmkp} onClick={()=>toggle()}>Adicionar personagem</Buttonice>
  }

  return <Toolbar align={"horizontal"} makup={mktoolbar} midst={<ScoreButton/>}/>
}


const Home : React.FC = () => {
    const szHeaderBar = '3rem';
    
    const { open, toggle } = useModal();
    
    return (
      <sy.wrapper>
          <SplitBoard sz={szHeaderBar} dir='row' one={<Headerbar toggle={toggle} open={open}/>} two={<Desktop open={open} toggle={toggle}/>}/>
      </sy.wrapper>   
    )
}

export {Home}