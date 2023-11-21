import { ModalProps } from "./dialog.types";
import { Dlg } from "./dlgnew";

const Dialog:React.FC<ModalProps> = ({open,toggle}) => {
    return <Dlg open={open} toggle={toggle}/>
}

export {Dialog}