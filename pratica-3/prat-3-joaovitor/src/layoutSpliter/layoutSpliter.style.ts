import styled from "styled-components/native"

const Container = styled.View<{flexD:string}>`
    flex-direction: ${(p)=> p.flexD};    
    background: black;
    width: 100%; 
    height: 100%; 
    align-items: start;
`;

const ViewSuperior = styled.View<{width:string,height:string}>`
    background: #F5DEB3;
    width: ${(p) => p.width}; 
    height: ${(p) => p.height};
    padding: 10px;
`;

const ViewInferior = styled.View<{width:string,height:string}>`   
    background: #5F9EA0;
    width: ${(p) => p.width}; 
    height: ${(p) => p.height}; 
    padding: 10px;
`;

const ViewErro = styled.View`   
    background: red;
    width: 100%; 
    height: 100%; 
    padding: 80px 20px 0px 20px;
    
`;

const TextoErro = styled.Text`

    font-size: 20px;
    color: black;
    font-weight: bold;

`; 



export {Container,ViewSuperior,ViewInferior,ViewErro,TextoErro}