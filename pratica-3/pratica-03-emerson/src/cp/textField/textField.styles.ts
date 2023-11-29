import styled from 'styled-components/native';
import { TextFiedStyles } from './textField.types';

const TextFieldSy = styled.TextInput<TextFiedStyles>`
    background-color: ${(p)=>p.background};
    color: ${(p)=>p.color};
`;

export {TextFieldSy}