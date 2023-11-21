import React, {  } from 'react';
import { Buttonice, SplitBoard, Toolbar, createButtonMakup } from 'libjr';
import {styles as sy} from './home.styles'
import { Dialog } from './dialog/dialog';
import { ModalProps } from './dialog/dialog.types';
import { ListarCadastro } from './listplayer';
import { useModal } from 'libjr';

const DesktopArea:React.FC<ModalProps> = ({open,toggle}) => {

  return (
      <sy.box>
        <ListarCadastro />
        <Dialog open={open} toggle={toggle}/>
      </sy.box>      
  )
}

const Leftbar:React.FC = () => {

  const mktoolbar = {fg: "#FFFFFF",bg: "#d130cc",alpha: .8,sz: "2.5rem"}

  return <Toolbar align={"vertical"} makup={mktoolbar} />
}

const Desktop:React.FC<ModalProps> = ({open,toggle}) => {
  const szLeftBar = '3rem';
  return <SplitBoard sz={szLeftBar} dir='col' one={<Leftbar />} two={<DesktopArea open={open} toggle={toggle}/>}/>
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Headerbar:React.FC<ModalProps> = ({toggle}) => {
  const mktoolbar = {fg: "#7b48b5",bg: "#7b48b5",alpha: .8,sz: "2.5rem"}
  const btmkp =  createButtonMakup({fg:'#1f1d1c',bg:'#f0118f',hg:'#6C716D'},'rounded') 

  const ScoreButton = () => {
    return <Buttonice sz={"165px"} makup={btmkp} onClick={()=>toggle()}> Clique aqui para cadastrar</Buttonice>
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