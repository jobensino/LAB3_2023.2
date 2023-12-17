import styled from "styled-components/native";

const InputAdicionar = styled.TextInput<{width:string}>`
    width: ${(p:any) => p.width};    
    min-height:50px;
    color: black;
    background: #FFFFF0;
    border-radius: 5px;
    border: 3px;
    margin: 5px;
    padding: 10px;
        
`;

const BotaoAdicionar = styled.TouchableOpacity<{width:string}>`
  width: ${(p:any) => p.width};
  height: 80px;
  padding-top: 10px;
  margin: 5px;
  background: #F5F5F5;
  border-radius: 5px;
  border: 3px;
  margin-top: 3px;
  align-items: center;
`;


const TextoAdicionar = styled.Text`
    color: black;
    font-size: 35px;
    font-weight:bold;
`;

const FundoAdicionar = styled.View`
  width: 100%; 
  height: 100%; 
  background:	#D3D3D3;
  align-items: center;
  padding-top: 200px;

`;

export {InputAdicionar,TextoAdicionar,BotaoAdicionar,FundoAdicionar}