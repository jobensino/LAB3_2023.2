import { useEffect, useRef } from 'react';
import { TextFieldProps,InputChangeEvent } from "./textedit.types";
import { styles as sy} from './textedit.styles';

const TextEdit: React.FC<TextFieldProps> = (({label, name, placehorlder,makup, handleChange, ...rest } ) => {
    
  const inputRef = useRef<HTMLInputElement>(null);
  const textRef = useRef<string|undefined>();

  const textChange = (e:InputChangeEvent) => {

    textRef.current = e.target.value;
    if (handleChange) handleChange(e.target.value);
       
  }

  const handleFocus = () => {   
    
  }

  const handleLabelCick = () => {      
      if (inputRef.current) {
        inputRef.current.focus(); 
      }    
  }

  const handleBlur = () => {     
    
  }

  useEffect( ()=>{textRef.current=""},[])

  // autoFocus={inputRef.current === document.activeElement}
  return (
    <sy.root makup={makup} >
        
        <sy.label makup={makup} htmlFor={name} onClick={() => handleLabelCick()}>{label}</sy.label>
        
        <sy.input ref={inputRef}
                  type='text'
                  id={name} 
                  key={name}
                  value={textRef.current}
                  makup={makup} 
                  placeholder={placehorlder}
                  onChange={textChange}
                  onFocus={handleFocus} 
                  onBlur={handleBlur}                   
                  autoComplete='off' {...rest}/>        
    </sy.root>
  );
});

export {TextEdit};