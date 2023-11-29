import styled from "styled-components/native"

const Container = styled.View<{width:string,height:string}> `
    
    background: #FFFFF0;
    padding: 10px;
    width: ${(p) => p.width};
    height: ${(p) => p.height};
    border-radius: 5px;
    border: 2px;
    align-items: center;
    padding: 5px 10px 0px 10px;
`;

const Botao = styled.TouchableOpacity<{width:string}>`
  width: ${(p) => p.width};
  height: 40px;
  padding: 5px 0px 0px 0px;
  background: #F5F5F5;
  border-radius: 5px;
  border: 2px;
  margin-top: 0.3px;
`;

const TextoBotao = styled.Text`
  font-size: 16px;
  text-align: center;
  color:black;
`;

export {
    Container,
    Botao,
    TextoBotao
}