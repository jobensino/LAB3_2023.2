import styled from 'styled-components/native';

interface ButtonSty {
  bg?:string;
}

const Container = styled.Pressable<ButtonSty>`

  display: flex;
  width: 100px;
  height: 40px;

  margin: 4px;
  padding: 0px;

  border-radius: 10px;

  background-color: ${ (p:ButtonSty)=>p.bg ? p.bg : '#B712B7' };
  
  align-items: center;
  justify-content: center;
`;

const Caption = styled.Text`
  font-size: 16px;
  text-align: center;
  color: #EBE6E2;
  user-select: none;
`;

export {Container,Caption}