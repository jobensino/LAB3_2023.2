import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;

    flex-direction: row;
    
    margin: 0px;
    padding: 4px;

    width: 100vw;
    height: 100vh;

    background-color: #424242;
`;

const Box = styled.div`
    display: flex;
    
    flex-direction: row;
    
    margin: 0px;
    padding: 0px;

    width: 100%;
    height: fit-content;

    background-color: #666363;
`;

const Column = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 0px;
    padding: 0px;

    background-color: #666363;
`;

const Card = styled.div`

    display: flex;
    background-color: red;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 10px;
    margin-left: 10px;
    border-radius: 25px;

`;

const Image = styled.img`

    display: flex;
    height: 30px;
    width: 30px;
    border-radius: 5px;
`;

const Paragraf = styled.p`
    display: flex;
    flex-direction: column;
    text-align: center;
    color: #fff;
`;

export const styles = {
    wrapper: Wrapper,
    box: Box,
    column: Column,
    card: Card,
    paragraf: Paragraf,
    img : Image
}