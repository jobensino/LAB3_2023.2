import styled from "styled-components/native"


const ButtonContainer = styled.TouchableOpacity<{bg:string,width:string}>`
  
  margin: 0px;
  width: ${(p: { width: any; }) => p.width};;
  height: 40px;
  padding: 8px;
  border-radius: 10px;
  background-color: ${(p: { bg: any; }) => p.bg};
  
  opacity: 1.0;

  &.hover {
    opacity: 0.5;
  }
`;

const ButtonText = styled.Text`
  font-size: 16px;
  text-align: center;
`;

export {ButtonContainer,ButtonText}