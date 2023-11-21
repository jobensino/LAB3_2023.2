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

const Img = styled.img`
    width: 40%;
    height: 40%;
    display: flex;
    justify-content: center; 
    align-items: center; 
    margin: 0 auto;

`;


const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0px;
    padding: 0px;

    width: 100%;
    height: 100%;

    background-color: #666363;
`;

export const styles = {
    wrapper: Wrapper,
    box: Box,
    column: Column
}

export {Img};