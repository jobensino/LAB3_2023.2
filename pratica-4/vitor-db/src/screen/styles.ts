import styled from 'styled-components/native';

const Container = styled.View`
    display: flex;
    flex-direction: column;

    
    background-color: #D3D3D3;
    
    align-items: center;
    justify-content: center;
    
    height:100%;
    width:100%;
`;

const Title = styled.Text`
    color: black;
    font-size: 40px;
    font-weight: bold;
    margin: 10px;
`;

const Box = styled.View`
    display: flex;
    
    flex-direction: row;
    
    margin: 0px;
    padding: 0px;

    width: 100%;

    background-color: #666363;
`;

const RowText = styled.Text`
    color: #CECECE;
    font-size: 20px;
    margin: 10px;
`;

export {Container,Title,Box,RowText}