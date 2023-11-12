import { styled } from "styled-components";

interface BoxProps {
    w?: string,
    h?: string,
    bg?: string,
    fg?: string,
  }
  
  const Container = styled.div<BoxProps>`
      display: flex;
      flex-direction: column;
  
      width: ${ p => p.w ? p.w : '100%'}; 
      height: ${ p => p.h ? p.h : '100%'}; 
  
      background-color: ${ p => p.bg ? p.bg : 'transparent'}; 
  `;
  
  const Box = styled.div<BoxProps>`
      display: flex;
      flex-direction: column;
      
      width: ${ p => p.w ? p.w : '100%'}; 
      height: ${ p => p.h ? p.h : '100%'};
  
      background-color: ${ p => p.bg ? p.bg : 'transparent'}; 
  
      min-height: 1rem;
  `;

  const MessageError = styled.p`
    margin-left: 2px;
    margin-right: 2px;
    margin-top: 2px;
    margin-bottom: 2px;
    font-size: 0.8rem;
    font-weight: lighter;
    color: #e37e7e
  `;

  export {Container, Box, MessageError}