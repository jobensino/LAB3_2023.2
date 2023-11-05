import React, { useState } from 'react'
import { styles as sy } from './test.styles';
import { Buttonice, Dropdown, SplitBoard, Toolbar, createButtonMakup, useModal } from './lib';
import { Dlg } from './dlgnew';

const Test : React.FC = () => {

  const szHeaderBar = '3rem';
  const szLeftBar = '3rem';
  const mktoolbar = {fg: "#FFFFFF",bg: "#323232",alpha: .8,sz: "2.5rem"}

  const Headerbar = () => <Toolbar align={"horizontal"} makup={mktoolbar} />
  const Leftbar = () => <Toolbar align={"vertical"} makup={mktoolbar} />
  
  const DesktopArea = () => {
    
    const btmkp =  createButtonMakup({fg:'#F1EFF1',bg:'#3c342e',hg:'#6C716D'},'rounded') 

    const items = ["Lógica de Programação","Laboratório I","Laboratório II","Laboratório III"]
    const [value,setValue] = useState(items[0]);

    const { open, toggle } = useModal();
    
    const Dialog = () => {
      return <Dlg open={open} toggle={toggle}/>
    }

    return (
        <sy.box>
            <Buttonice sz={"128px"} makup={btmkp} onClick={()=>toggle()}>Modal Window</Buttonice>
            <Dropdown items={items} initialValue={value} onSelect={(n)=>setValue(n)} sz="160px" />
            <Dialog />
        </sy.box>      
    )
  }

  const Desktop = () => <SplitBoard sz={szLeftBar} dir='col' one={<Leftbar />} two={<DesktopArea/>}/>

  return (
    <sy.wrapper>
        <SplitBoard sz={szHeaderBar} dir='row' one={<Headerbar />} two={<Desktop/>}/>
    </sy.wrapper>   
  )
}

export {Test};