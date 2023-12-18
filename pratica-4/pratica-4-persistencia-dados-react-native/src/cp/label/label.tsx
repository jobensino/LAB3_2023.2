import { Container } from "./label.style"

interface LabelProps {
    children:string
}
const Label:React.FC<LabelProps> = ({children}) => {

    return (

        <Container>{children}</Container>

    )
}

export default Label;