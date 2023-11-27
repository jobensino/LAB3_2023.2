import styled from 'styled-components/native';

const Container = styled.View`
    display: flex;
    flex-direction: column;

    background-color: #5C5E5C;
    
    align-items: center;
    justify-content: center;
    
    height:100%;
    width:100%;
`;

const Title = styled.Text`
    font-size: 20px;
    margin: 10px;
`;

export {Container,Title}