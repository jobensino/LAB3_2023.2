import styled from "styled-components/native";
import { LabelProps } from "./label.types";


const Texto = styled.Text<LabelProps>`

background-color: ${p=>p.bgColor};
color: ${p=>p.color};
`;

export {Texto}