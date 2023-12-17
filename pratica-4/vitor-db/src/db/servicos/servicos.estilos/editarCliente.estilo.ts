import styled from "styled-components/native";

const InputEdit = styled.TextInput<{width:string}>`
    width: ${(p:any) => p.width};    
    min-height:50px;
    color: black;
    background: #FFFFF0;
    border-radius: 5px;
    border: 3px;
    margin: 5px;
    padding-left: 10px;
        
`;

const BotaoEdit = styled.TouchableOpacity<{width:string}>`
  width: ${(p:any) => p.width};
  height: 70px;
  padding-top: 5px;
  margin: 5px;
  background: #F5F5F5;
  border-radius: 5px;
  border: 3px;
  margin-top: 3px;
  align-items: center;
`;

const TextoBotaoEdit = styled.Text`
    color: black;
    font-size: 35px;
    font-weight:bold;
    padding: 0;
`;

const FundoEdit = styled.View`
  width: 100%; 
  height: 100%; 
  background:	#D3D3D3;
  align-items: center;
  padding-top: 200px;

`;

export {InputEdit,TextoBotaoEdit,BotaoEdit,FundoEdit}