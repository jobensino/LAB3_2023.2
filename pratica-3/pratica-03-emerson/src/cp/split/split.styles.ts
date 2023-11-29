
import styled from 'styled-components/native';

const ViewPrincipal = styled.View<{$direcao:string}>`
    display: flex;
 
    flex-direction: ${p=>p.$direcao == 'coluna' ? 'row' : 'column'};
    height: 100%;
    width: 100%;

    margin: 0px;
    padding: 0px;
    
`;

const ViewColuna = styled.View<{$size:string,$background:string}>`
    display: flex;
    flex: 1;
    background-color: ${(p) => p.$background};
    width: ${(p) => p.$size};
    height: 100%;
    justify-content: center;
    align-items: center;
`;

const ViewLinha = styled.View<{$size:string,$background:string}>`
    display: flex;
    flex: 1;
    background-color: ${(p) => p.$background};
    width: 100%;
    border: 1px;
    height: ${(p) => p.$size};
    justify-content: center;
    align-items: center;
`;

export {ViewColuna,ViewLinha,ViewPrincipal};
 