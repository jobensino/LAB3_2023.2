import styled from "styled-components/native";

const Container = styled.View`
    flex-direction: row;
    background: #ffff;
    border: 2px;
    border-radius:5px;
    width: 400px; 
    height: 100px; 
    align-items: start;
    padding: 30px 0px 0px 5px;

`;

const TextoLabel = styled.Text`
    padding: 9px 5px 0px 0px;
    font-size: 20px;
`;

export {Container,TextoLabel}