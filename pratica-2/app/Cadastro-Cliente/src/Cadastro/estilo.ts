import styled from "styled-components";

const Fundo = styled.div`

    font-family:Arial;
    background-image: linear-gradient(45deg, rgb(124, 165, 157),rgb(17, 166, 174)) ;    
    background-color: #fffff;
    height: 100vh;
    width: 100vw;

`;

const Texto = styled.h1`
    margin: 0px 0px 5px 0px;

`;

const Container = styled.div`
    
    width: 310px;
    height: auto;
    padding: 15px 20px 20px 20px;
    text-align: center;
    background-color: #000000;
    color: #ffff;
    position: absolute; 
    top: 50%; 
    left: 50%; 
    transform: translate(-50%, -50%); 
    border-radius: 15px;
`;


export const styles = {
    fundo:Fundo,
    container:Container,
    texto:Texto,

}