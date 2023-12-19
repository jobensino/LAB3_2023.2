import React from "react";
import { Container,Caption } from './button.styles';
import { ButtonProps } from "./button.type";

const Button:React.FC<ButtonProps> = ({caption,bg,handleClick}) => {

    return (
      
            <Container onPress={handleClick} bg={bg}>
                <Caption>{caption}</Caption>
            </Container>

    )
}

export default Button;