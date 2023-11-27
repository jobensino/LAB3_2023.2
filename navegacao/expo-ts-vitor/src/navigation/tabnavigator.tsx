import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import { MainStackNavigator,ContactStackNavigator } from './stacknavigator';

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
    </Tab.Navigator>
  );
};

export {BottomTabNavigator};