import {TextInput} from 'react-native'
import { TextFieldProps } from './textField.types';
import { TextFieldSy } from './textField.styles';
const TextField: React.ElementType<TextFieldProps> = ({maxLength,numberLines,onChangeText,value,styles}) => {

    return (
        <TextFieldSy background={styles.background} color={styles.color}
        editable={true}
        multiline
        numberOfLines={numberLines}
        maxLength={maxLength}
        onChangeText={onChangeText}
        value={value}
        
      />
    );
}

export {TextField}