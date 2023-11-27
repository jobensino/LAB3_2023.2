// conteúdo do arquivo drawernavigator.tsx
import { createDrawerNavigator } from '@react-navigation/drawer';

import { BottomTabNavigator } from "./tabnavigator";
import { ContactStackNavigator } from './stacknavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  
  return (
      <Drawer.Navigator>
        <Drawer.Screen name="home" component={BottomTabNavigator} options={{title:"Home"}} />
        <Drawer.Screen name="contact" component={ContactStackNavigator} options={{title:"Contatos"}} />
      </Drawer.Navigator>
  )
}

export {DrawerNavigator}