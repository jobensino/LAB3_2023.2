import styled from "styled-components/native";


const FundoVerTodos = styled.View`
  width: 100%; 
  height: 100%; 
  background:	#D3D3D3;
  align-items: center;
  padding-top: 10px;

`;

const TextoAlert = styled.Text`
    color: black;
    font-size: 20px;
    padding-top: 10px;
`;

const ContainerTodos = styled.View`
    width: 350px; 
    min-height:90px;
    color: black;
    background: #FFFFF0;
    border-radius: 5px;
    border: 3px;
    margin: 5px;
    padding: 5px;
`;


const TextoVerTodos = styled.Text`
    color: black;
    font-size: 17px;
    font-weight:bold;
    padding: 3px;
    
`;


export {FundoVerTodos,TextoAlert,TextoVerTodos,ContainerTodos}