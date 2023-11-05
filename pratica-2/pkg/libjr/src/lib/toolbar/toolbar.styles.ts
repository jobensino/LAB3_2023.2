import styled, { css } from 'styled-components';
import { TAlignToolbar, TToolbarPropsEx } from './toolbar.types';

const isVertical = (d:TAlignToolbar) => d=='vertical';
const isHorizontal = (d:TAlignToolbar) => d=='horizontal';

const szMargin = '16px';
const szHalfMargin = '4px';
const szGap = '8px';

const Container = styled.div<TToolbarPropsEx>`
    
    display: flex;
    justify-content: flex-start;
    align-items: center;

    background-color: ${p => p.$makup.bg};
    color: ${p => p.$makup.fg};
    opacity: ${p => p.$makup.alpha};
    
    user-select: none;

    padding: 0px;
    margin: 0px;

    ${ p => isVertical(p.$align) && css`
        flex-direction: column;
        width: ${p.$makup.sz};
        height: 100%;
    `}

    ${ p => isHorizontal(p.$align) && css`
        flex-direction: row;
        width: 100%;
        height: ${p.$makup.sz};
    `}    

    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none;   /* Safari */
    -khtml-user-select: none;   /* Konqueror HTML */
    -moz-user-select: none;   /* Old versions of Firefox */
    -ms-user-select: none;   /* Internet Explorer/Edge */
    user-select: none;   /* Non-prefixed version supported by Chrome, Edge, Opera and Firefox */

`;

const BoxHead = styled.div<{$align:TAlignToolbar}>`
    display: flex;
 
    justify-content: flex-start;
    align-items: center;
    
    width: 100%; 
    height: 100%; 
    
    margin: 0px;
    gap: ${szGap};

    ${ p => isVertical(p.$align) && css`
        flex-direction: column;
        margin-top: ${szMargin};
    `}

    ${ p => isHorizontal(p.$align) && css`
        flex-direction: row;
        margin-left: ${szMargin};
    `}   
    
`;

const BoxMidst = styled.div<{$align:TAlignToolbar}>`
    display: flex;

    justify-content: center;
    align-items: center;
    
    width: 100%; 
    height: 100%; 
    
    margin: 0px;
    gap: ${szGap};

    ${ p => isVertical(p.$align) && css`
        flex-direction: column;
        margin-top: ${szHalfMargin};
        margin-bottom: ${szHalfMargin};
    `}

    ${ p => isHorizontal(p.$align) && css`
        flex-direction: row;
        margin-left: ${szHalfMargin};
        margin-right: ${szHalfMargin};
    `}   

`;

const BoxTail = styled.div<{$align:TAlignToolbar}>`
    display: flex;
    
    justify-content: flex-end;
    align-items: center;
    
    margin: 0px;
    gap: ${szGap};

    width: 100%; 
    height: 100%; 

    ${ p => isVertical(p.$align) && css`
        flex-direction: column;
        margin-bottom: ${szMargin};
    `}

    ${ p => isHorizontal(p.$align) && css`
        flex-direction: row;
        margin-right: ${szMargin};
    `}   

`;

export const styles = {
    container: Container,
    head: BoxHead,
    midst: BoxMidst,
    tail: BoxTail
 }