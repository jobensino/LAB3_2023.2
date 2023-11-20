import React, { useEffect, useState } from "react";
import { ListPersonageAttr } from "./listPersonage.types";
import { stylePersonage as sy } from "./listPersonage.styles";
import { PersonageAttr } from "model/personage.model";
import { useDataService } from "libdb";
import { useGlobalContext } from "state/global.context";
import { Modal } from "libjr";


const ListPersonageComponent:React.FC<ListPersonageAttr> = ({colorText, colorBackground,onClick}) => {

    const {personage} = useGlobalContext();
    const {service} = useDataService<PersonageAttr>("PersonageDB","PersonageStore")
   
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_,forceUpdade] = useState(false)
    
    useEffect( ()=> {
      personage.load("personagename",service,()=>forceUpdade((prev)=>!prev));
    },[])

    return(
        personage.state.items && personage.state.items.map((item,index)=>
        <>
            <sy.container key={index} >
                <sy.divTop>
                    <sy.img src={item.image}></sy.img>
                </sy.divTop>
                <sy.divBottom colorBackground={colorBackground}>
                    <sy.p colorText={colorText}>Personagem: {item.name}</sy.p>
                    <sy.p colorText={colorText}>Poder: {item.power}</sy.p>
                    <sy.p colorText={colorText}>Ponto Fraco: {item.weakPoint}</sy.p>
                </sy.divBottom>
            </sy.container>   
        </>
        )
    )

};

export default ListPersonageComponent;
