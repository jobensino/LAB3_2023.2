import {View, Text} from 'react-native'
import { Texto } from './label.styles';
import { LabelProps } from './label.types';
const Label: React.ElementType<LabelProps> = ({bgColor,color,texto})=>{

    return (
        <Texto bgColor={bgColor} color={color}>{texto}</Texto>
    );
}

export {Label}