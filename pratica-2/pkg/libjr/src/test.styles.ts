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
    height: 100%;

    background-color: #666363;
`;

export const styles = {
    wrapper: Wrapper,
    box: Box,
}