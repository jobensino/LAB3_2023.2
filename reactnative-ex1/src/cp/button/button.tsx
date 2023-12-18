import React from "react"
import { ButtonContainer,ButtonText } from "./button.style"

interface ButtonProps {
    children:string,
    bg?:string,
    w?:string,
}

const Button: React.ElementType<ButtonProps> = ({children,w='120px',bg='#968787'}) =>{
    return (
        <ButtonContainer bg={bg} width={w}>
            <ButtonText>{children}</ButtonText>
        </ButtonContainer>
    )
}

export {Button}