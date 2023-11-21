import styled from "styled-components";
import { ListPersonageAttr } from "./listPersonage.types";


const Container = styled.div<ListPersonageAttr>`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 250px;
    height: 230px;
    border: 5px;
    margin-left: 10px;
`;

const DivTop = styled.div`
    display: flex;
    width: 100%;
    height: 50%;
    border-radius: 5px 5px 0 0;
    background-color: red;
`;

const DivBottom = styled.div<ListPersonageAttr>`

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 50%;
    border-radius: 0 0 5px 5px;
    background-color:${p=>p.colorBackground ? p.colorBackground : '#fff'};
`;

const P = styled.p<ListPersonageAttr>`
    color: ${p=>p.colorText ? p.colorText : '#000'};
    font-size: 18px;
    text-align: center;
`;
const Img = styled.img`
    width: 100%;
    height: 100%;
`;
export const stylePersonage = {
    container: Container,
    divTop : DivTop,
    divBottom: DivBottom,
    p: P,
    img: Img

};