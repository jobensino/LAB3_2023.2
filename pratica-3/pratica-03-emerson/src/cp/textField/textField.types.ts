type TextFiedStyles = {
    background: string,
    color: string
}


interface TextFieldProps {

    numberLines: number,
    maxLength: number,
    onChangeText: (text: string) => void,
    value: string
    styles: TextFiedStyles
    
}

export {TextFieldProps, TextFiedStyles}