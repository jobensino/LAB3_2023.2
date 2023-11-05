import styled, { css } from "styled-components";
import { ButtonicePropsEx, TButtoniceKind } from "./buttonice.types";

const isCircle = (k:TButtoniceKind) => k=='circle';
const isRounded = (k:TButtoniceKind) => k=='rounded';

const Container = styled.button<ButtonicePropsEx>`

    display: flex;

    justify-content: center;
    align-items: center;

    cursor: pointer;

    margin: 0px;
    padding: 8px;
    
    white-space: nowrap; 
    height: fit-content;
    width: ${ p => p.$sz};

    color: ${(p) =>  p.$makup.item.hout.fg};
    background-color: ${(p) => p.$makup.item.hout.bg};

    border-radius: 0px;
    
    ${ p => isCircle(p.$makup.kind) && css`
        border-radius: calc( ${p.$sz}/2);
        height: ${p.$sz};
    `}

    ${ p => isRounded(p.$makup.kind) && css`
        border-radius: calc( ${p.$sz}/3);
    `}

    &:hover {
      
      color: ${(p) => p.$makup.item.hover.fg};
      background-color: ${(p) => p.$makup.item.hover.bg};

      ${ p => isCircle(p.$makup.kind) && css`
        border-radius: calc( ${p.$sz}/2);
      `}
    
      ${ p => isRounded(p.$makup.kind) && css`
        border-radius: calc( ${p.$sz}/3);
      `}

    }

`;

export const styles = {
    container: Container
}