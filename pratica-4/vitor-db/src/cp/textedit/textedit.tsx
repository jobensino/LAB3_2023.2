import { useRef } from "react";
import { Container,Input } from "./textedit.style";

interface TextEditProps{
    width?: string;
    type?: 'text'|'email'|'password',
    textChange?:(text:string)=>void,
}

const TextEdit:React.FC<TextEditProps> = ({width='120px',type='text',textChange}) => {

    const textRef = useRef<string|undefined>();
    
    const handleChange = (text:string) => {
        textRef.current = text;
        if (textChange) textChange(text);
    }

    return (

        <Container w={width} >
            {type==='text' && <Input onChangeText={(s:string) => handleChange(s)}/>}
            {type==='password' && <Input secureTextEntry={true} onChangeText={(s:string) => handleChange(s)}/>}
            {type==='email' && <Input keyboardType="email-address" onChangeText={(s:string) => handleChange(s)}/>}
        </Container>

    )
}

export default TextEdit;