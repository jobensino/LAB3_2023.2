import styled from "styled-components/native";

const InputDeletar = styled.TextInput<{width:string,height:string}>`
    width: ${(p:any) => p.width};    
    height: ${(p:any) => p.height};
    color: black;
    background: #FFFFF0;
    border-radius: 5px;
    border: 3px;
    margin: 5px;
    padding: 5px;
        
`;

const BotaoDeletar = styled.TouchableOpacity<{width:string}>`
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

const TextoDeletar = styled.Text`
    color: black;
    font-size: 35px;
    font-weight:bold;
    padding: 0;
`;

const FundoDeletar = styled.View`
  width: 100%; 
  height: 100%; 
  background:	#D3D3D3;
  align-items: center;
  padding-top: 200px;

`;

export {InputDeletar,TextoDeletar,BotaoDeletar,FundoDeletar}