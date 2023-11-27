import "react-native-gesture-handler"; 

import { registerRootComponent } from 'expo';

import { NavigationContainer } from '@react-navigation/native';
import { BottomTabNavigator } from "./navigation/tabnavigator";
import { DrawerNavigator } from "./navigation/drawernavigator";

const App = () => {
  
  return (
    <NavigationContainer>
      <DrawerNavigator />
      {/* <BottomTabNavigator /> */}
    </NavigationContainer>
  )
}

export default registerRootComponent(App);