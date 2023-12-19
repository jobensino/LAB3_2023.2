import { useRef } from "react";
import { Container,Input } from "./textedit.style";

interface TextEditProps{
    width?: string;
    type?: 'text'|'email'|'password',
    value?: string;
    placeholder?: string;
    textChange?:(text:string)=>void,
}

const TextEdit:React.FC<TextEditProps> = ({width='120px',type='text', value, placeholder, textChange}) => {

    const textRef = useRef<string|undefined>();
    
    const handleChange = (text:string) => {
        textRef.current = text;
        if (textChange) textChange(text);
    }

    return (

        <Container w={width} >
            {type==='text' && <Input value={value} placeholder={placeholder} onChangeText={(s:string) => handleChange(s)}/>}
            {type==='password' && <Input value={value} placeholder={placeholder} secureTextEntry={true} onChangeText={(s:string) => handleChange(s)}/>}
            {type==='email' && <Input value={value} placeholder={placeholder} keyboardType="email-address" onChangeText={(s:string) => handleChange(s)}/>}
        </Container>

    )
}

export default TextEdit;