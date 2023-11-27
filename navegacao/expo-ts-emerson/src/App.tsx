import "react-native-gesture-handler"; 

import { registerRootComponent } from 'expo';
import {DrawerNavigator} from './navigation'
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabNavigator } from "./navigation";

const App = () => {
  
  return (

    <NavigationContainer>
      
      <DrawerNavigator />
    </NavigationContainer>
  )
}

export default registerRootComponent(App);