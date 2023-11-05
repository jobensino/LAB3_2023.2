interface TTextInputMakup {
    fg: string,
    bg: string,
    focusColor: string,
    placeColor: string,
    padV: string,
    padH: string,
    fontsz: string,
    h: string,    
}

type TTextFieldRender ={
    makup?: TTextInputMakup
}

type InputElement = HTMLInputElement | HTMLTextAreaElement;
type InputChangeEvent = React.ChangeEvent<InputElement>;

interface TextFieldProps extends TTextFieldRender {
    label: string;
    name: string;
    placehorlder?:string,
    handleChange?: (text:string)=>void 
}
  
export type {TextFieldProps,InputChangeEvent,InputElement,TTextFieldRender,TTextInputMakup};
