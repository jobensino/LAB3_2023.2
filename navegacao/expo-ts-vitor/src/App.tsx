import "react-native-gesture-handler"; 

import { registerRootComponent } from 'expo';

import { NavigationContainer } from '@react-navigation/native';
import {DrawerNavigator} from "./navigation";

const App = () => {
  
  return (
    <NavigationContainer>

     <DrawerNavigator/>
     
    </NavigationContainer>
  )
}

export default registerRootComponent(App);
