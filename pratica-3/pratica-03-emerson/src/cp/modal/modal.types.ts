import { ReactNode } from 'react';

interface ModalProps {
    isOpen:boolean
    setModal: ()=> void
    children ?: ReactNode
    title: String
}

export default ModalProps