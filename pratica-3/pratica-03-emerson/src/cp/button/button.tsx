import { ButtonContainer,ButtonText } from "./button.style"

interface ButtonProps {
    children:string,
    bg?:string,
    w?:string,
    onPress: () => void
}

const Button: React.ElementType<ButtonProps> = ({children,w='120px',bg='#968787', onPress}) =>{
    return (
        <ButtonContainer bg={bg} width={w} onPress={onPress}>
            <ButtonText>{children}</ButtonText>
        </ButtonContainer>
    )
}

export {Button}