import ModalProps from "./modal.types";
import { Button } from "../button";
import { ViewPrincipal, ViewCentral, ViewFinal, ViewTopo, Botao, Texto } from "./modal.style";


const Modal:React.ElementType<ModalProps> = ({isOpen,setModal,title,children}) =>{
    if(isOpen){
        return(
            <ViewPrincipal>
               <ViewTopo>
                    <Texto>{title}</Texto>
                </ViewTopo>
                <ViewCentral>{children}</ViewCentral> 
                <Button onPress={setModal}>fechar</Button>
            </ViewPrincipal>
        );
    }

    return null;
}
export {Modal};