import { useDataService } from "libdb";
import { PlayerScoreAttr } from "model/player.model";
import { useState, useEffect } from "react";
import { useGlobalContext } from "state/global.context";
import {styles as sy} from './home.styles'

const ListPlayerScore:React.FC = () => {
    const {player} = useGlobalContext();
    const {service} = useDataService<PlayerScoreAttr>("PlayerDB","PlayerStore")
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_,forceUpdade] = useState(false)
    
    useEffect( ()=> {
      player.load("playerscore",service,()=>forceUpdade((prev)=>!prev));
    },[])
  
    return (
        <sy.column>
        {player.state.items && player.state.items.map((item,index)=><sy.box key={index}>{item.name}-{item.score}</sy.box>)}            
        </sy.column>
    )
  }

  export {ListPlayerScore}