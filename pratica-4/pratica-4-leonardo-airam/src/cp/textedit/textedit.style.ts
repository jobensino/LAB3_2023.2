import styled from 'styled-components/native';

interface TextEditSty {
  bg?:string;
  w?:string;
}

const Container = styled.View<TextEditSty>`

  display: flex;

  align-items: center;
  justify-content: center;

  margin: 0px;

  width: ${ (p:TextEditSty)=>p.w ? p.w : '120px' };
`;

const Input = styled.TextInput<TextEditSty>`
    width: 100%;

    margin: 2px;
    padding: 10px;

    border-style: solid;
    border-color: #474747;
    border-width: 1px;
    border-radius: 10px;

    background-color: ${ (p:TextEditSty)=>p.bg ? p.bg : '#F2EEF2' };

`;

export {Container,Input}