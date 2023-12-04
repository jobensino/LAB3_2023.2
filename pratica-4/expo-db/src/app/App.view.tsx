import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from "navigation/stacknavigator";
import { useState } from 'react';
import { GlobalProvider } from "state/global.provider";

const App:React.FC = () => {
  
  const [connected] = useState(true);
  
  return (
    <GlobalProvider>
      { 
        connected &&  <AppRoot />
      }
    </GlobalProvider>
    
  )
}

const AppRoot:React.FC = () => {
  
  return (
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>    
  )
}

export default App;