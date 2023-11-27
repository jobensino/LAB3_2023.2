// conteúdo do arquivo tabnavigator.tsx
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AboutStackNavigator, ContactStackNavigator, MainStackNavigator } from './stacknavigator';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="hometab"
        component={MainStackNavigator}
        options={{ headerShown: false,title:"Home"}}
      />
      <Tab.Screen
        name="contactab"
        component={ContactStackNavigator}
        options={{ headerShown: false,title:"Contatos"}}
      />
      <Tab.Screen
        name="abouttab"
        component={AboutStackNavigator}
        options={{ headerShown: false,title:"Sobre"}}
      />
    </Tab.Navigator>
  );
};

export {BottomTabNavigator};