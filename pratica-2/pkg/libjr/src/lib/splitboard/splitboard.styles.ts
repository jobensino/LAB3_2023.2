import styled from 'styled-components';
import { TDirectiontSplitBoard } from './splitboard.types';

const Container = styled.div<{$dir:TDirectiontSplitBoard}>`
    display: flex;

    flex-direction: ${p=>p.$dir=='col' ? 'row' : 'column'};

    height: 100%;
    width: 100%;

    margin: 0px;
    padding: 0px;
    
`;

const PaneCol = styled.div<{$sz:string,$bg:string}>`
    display: flex;
    
    width: ${(p) => p.$sz};

    height: 100%;
`;

const PaneRow = styled.div<{$sz:string,$bg:string}>`
    display: flex;
    
    width: 100%;
    
    height: ${(p) => p.$sz};
`;

export const styles = {
    container: Container,
    col: PaneCol,
    row: PaneRow,
 }