import styled from "styled-components/native"

const Container = styled.TextInput<{width:string,height:string}>`
    width: ${(p) => p.width};    
    height: ${(p) => p.height};
    color: black;
    background: #FFFFF0;
    border-radius: 5px;
    border: 2px;
    margin: 5px;
    padding: 5px;
        
`;

const Texto = styled.Text`
    color: red;
    font-size: 20px;

`;

export {Container,Texto}