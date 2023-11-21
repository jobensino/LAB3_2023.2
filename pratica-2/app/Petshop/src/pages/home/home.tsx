import React, {  } from 'react';
import { Buttonice, SplitBoard, Toolbar, createButtonMakup } from 'libjr';

import {styles as sy} from './home.styles'
import { Dialog } from './dialog/dialog';
import { ModalProps } from './dialog/dialog.types';
import { ListPetshopScore } from './listpetshop';
import { useModal } from 'libjr';

const DesktopArea:React.FC<ModalProps> = ({open,toggle}) => {

  return (
      <sy.box>
        <ListPetshopScore />
        <Dialog open={open} toggle={toggle}/>
      </sy.box>      
  )
}

const Leftbar:React.FC = () => {

  const mktoolbar = {fg: "#8cfae8",bg: "#77f2de",alpha: .8,sz: "3rem"}

  return <Toolbar align={"vertical"} makup={mktoolbar} />
}

const Desktop:React.FC<ModalProps> = ({open,toggle}) => {
  const szLeftBar = '3rem';
  return <SplitBoard sz={szLeftBar} dir='col' one={<Leftbar />} two={<DesktopArea open={open} toggle={toggle}/>}/>
}

const Headerbar:React.FC<ModalProps> = ({toggle}) => {
  const mktoolbar = {fg: "#8cfae8",bg: "#77f2de",alpha: .8,sz: "3rem"}
  const btmkp =  createButtonMakup({fg:'#dff7f3',bg:'#0d1715',hg:'#6C716D'},'square') 

  const BotaoCadastro = () => {
    return <Buttonice sz={"100px"} makup={btmkp} onClick={()=>toggle()}>Clique aqui</Buttonice>
  }

  return <Toolbar align={"horizontal"} makup={mktoolbar} midst={<BotaoCadastro/>}/>
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