import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from "navigation/stacknavigator";
import { useEffect, useState } from 'react';
import { GlobalProvider } from "../state/global.provider";
import { db } from 'db/config/conexao';

const App:React.FC = () => { 
  
  const [connected,setConnected] = useState(true);
  

  useEffect( ()=> {
    db.connect()
  },[])

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