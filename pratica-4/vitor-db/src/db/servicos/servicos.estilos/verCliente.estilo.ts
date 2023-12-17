import styled from "styled-components/native";

const InputVer = styled.TextInput<{width:string,height:string}>`
    width: ${(p:any) => p.width};    
    height: ${(p:any) => p.height};
    color: black;
    background: #FFFFF0;
    border-radius: 5px;
    border: 3px;
    margin: 5px;
    padding-left: 10px;
        
`;

const BotaoVer = styled.TouchableOpacity<{width:string}>`
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

const TextoVer = styled.Text`
    color: black;
    font-size: 17px;
    font-weight:bold;
    padding: 3px;
`;

const TextoBotaoVer = styled.Text`
    color: black;
    font-size: 35px;
    font-weight:bold;
    padding: 0;
`;


const ContainerVer = styled.View`
    width: 350px; 
    min-height:90px;
    color: black;
    background: #FFFFF0;
    border-radius: 5px;
    border: 3px;
    margin: 5px;
    padding: 5px;

`;

const FundoVer = styled.View`
  width: 100%; 
  height: 100%; 
  background:	#D3D3D3;
  align-items: center;
  padding-top: 200px;

`;

export {InputVer,TextoBotaoVer,TextoVer,BotaoVer,FundoVer,ContainerVer}