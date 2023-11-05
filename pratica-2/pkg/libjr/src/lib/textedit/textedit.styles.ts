import styled from 'styled-components';
import { TTextFieldRender, TTextInputMakup } from './textedit.types'

const mkup : TTextInputMakup = {
    fg: '#D3D0CF',
    bg: '#C7C3C3',
    focusColor: '#24DD34',
    placeColor: '#0B550B',    
    padV: '0.2rem',
    padH: '0.3rem',
    fontsz: '0.8rem',
    h: '2rem',    
}

const TextFieldContainer = styled.div<TTextFieldRender>`
    
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    color: ${ p=> p.makup ? p.makup.fg : mkup.fg };
    background-color: transparent;
    
    width: calc(100% - 4px);
    min-height: ${ p=> p.makup ? p.makup.h : mkup.h};

    margin-left: 2px;
    margin-right: 2px;
    margin-top: 2px;
    margin-bottom: 2px;
    
    font-size: ${ p=> p.makup ? p.makup.fontsz : mkup.fontsz};
    font-weight: lighter;
`;

const TextFieldLabel = styled.label<TTextFieldRender>`  
    color: ${ p=> p.makup ? p.makup.fg : mkup.fg};  
    padding-left: ${ p=> p.makup ? p.makup.padH : mkup.padH};
`;

const TextFieldInput = styled.input<TTextFieldRender>`

    color: ${ p=> p.makup ? p.makup.fg : mkup.placeColor};
    background-color: ${ p=> p.makup ? p.makup.bg : mkup.bg};

    box-sizing: border-box ;
    border-style: dotted;
    border-width: 1px;
    border-color: ${ p=> p.makup ? p.makup.fg : mkup.fg};
    border-radius: 8px;
    width: 100%;

    outline: none;

    padding-top: ${ p=> p.makup ? p.makup.padV : mkup.padV};
    padding-bottom: ${ p=> p.makup ? p.makup.padV : mkup.padV};
    padding-left: ${ p=> p.makup ? p.makup.padH : mkup.padH};
    padding-right: ${  p=> p.makup ? p.makup.padH : mkup.padH};

    &:focus {
        border: 1px dotted ${ p=> p.makup ? p.makup.focusColor : mkup.focusColor};
    }

    &::placeholder{
        color: ${ p=> p.makup ? p.makup.placeColor : mkup.placeColor};
        font-weight: lighter;
    }
`;

export const styles = {
    root: TextFieldContainer,
    label: TextFieldLabel,
    input: TextFieldInput,
}