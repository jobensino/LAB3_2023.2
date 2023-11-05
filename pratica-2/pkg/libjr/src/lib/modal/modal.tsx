import { ModalProps } from "./modal.types";
import {styles as sy} from './modal.styles'
import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { usePortal } from "./hooks/useportal";

const Modal: React.FC<ModalProps> = ({ open,title,hide,children,focusitems=[],freeze=true }) => {

    const portal = usePortal("modal");
    const modalRef = useRef<HTMLDivElement>(null);
    const focusableRef = useRef<HTMLElement[]>([]);
    const activeRef = useRef<number>(-1);

    useEffect(() => {
        activeRef.current = focusitems.length>0  ? 0 : -1;      
        
        focusableRef.current = [];
        focusitems.forEach( (item)=>{ 
            const element = document.getElementById(item);
            if (element) focusableRef.current.push(element);
        })  

        if (activeRef.current>=0 && focusableRef.current.length>0) {
            focusableRef.current[activeRef.current].focus();
        }

    },[focusitems]);  

    useEffect(() => {
        const modal = modalRef.current;
        
        const handleKeydown = (event:KeyboardEvent) => {
            const total = focusitems.length
            const activeIndex = activeRef.current;
            const focusable = focusableRef.current;

            if (event.key === "Tab") {
                if (!event.shiftKey) {  
                    activeIndex + 1 === total ? activeRef.current = 0 : activeRef.current += 1
                    focusable[activeRef.current].focus();
                    return event.preventDefault();
                }
                if (event.shiftKey) {
                    // if activeIndex - 1 less than 0 focus last element otherwise focus previous element
                    activeIndex - 1 < 0 ? activeRef.current = total - 1 : activeRef.current -= 1;
                    focusable[activeRef.current].focus(); 
                    return event.preventDefault();
                }
            }
            
            if (event.key === "Escape") {
                hide();
            }
        }

        if (modal) {
            
            if (activeRef.current>=0 && focusableRef.current.length>0) {
                focusableRef.current[activeRef.current].focus();
            }

            modal.addEventListener("keydown", handleKeydown);
            
            return () => {
                modal.removeEventListener("keydown", handleKeydown);
            };

        }  
    },[focusitems.length, hide, open]);  

   
    const ModalPiece = () => {
        return(
            <sy.container role="dialog" aria-modal="true" ref={modalRef}>
                {freeze ? <sy.backdrop /> : <sy.backdrop onClick={hide} /> }
                <sy.wrapper >
                    <sy.styledmodal>
                        <sy.header>
                            <sy.title>{title}</sy.title>
                            <sy.closebtn onClick={hide}>✕</sy.closebtn>
                        </sy.header>
                        <sy.content>{children}</sy.content>
                    </sy.styledmodal>
                </sy.wrapper>
            </sy.container>
        );
    }
    
    return (open && portal) ? ReactDOM.createPortal(<ModalPiece />, portal) : <></>;
    
};

export {Modal}