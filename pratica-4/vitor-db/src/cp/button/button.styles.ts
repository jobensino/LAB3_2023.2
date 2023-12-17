import styled from 'styled-components/native';

interface ButtonSty {
  bg?:string;
}

const Container = styled.Pressable<ButtonSty>`

  display: flex;
  width: 380px;
  height: 60px;

  margin: 4px;
  padding: 4px;

  border-radius: 10px;

  background-color: ${ (p:ButtonSty)=>p.bg ? p.bg : '#363536' };
  
  align-items: center;
  justify-content: center;
`;

const Caption = styled.Text`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  color: #fff;
  user-select: none;
`;

export {Container,Caption}