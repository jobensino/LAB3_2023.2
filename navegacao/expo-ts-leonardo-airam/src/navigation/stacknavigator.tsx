// conteúdo do arquivo stacknavigator.tsx
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home, About, Contact } from '../screens';

const Stack = createNativeStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#BB3508",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const MainStackNavigator = () => {

  return (
    <Stack.Navigator screenOptions={screenOptionStyle} >
      <Stack.Screen name="home" component={Home} options={{ title: "Home" }} />
    </Stack.Navigator>
  )
}

const ContactStackNavigator = () => {

  return (
    <Stack.Navigator screenOptions={screenOptionStyle} >
      <Stack.Screen name="contact" component={Contact} options={{ title: "Contatos" }} />
    </Stack.Navigator>
  )
}

const AboutStackNavigator = () => {

  return (
    <Stack.Navigator screenOptions={screenOptionStyle} >
      <Stack.Screen name="about" component={About} options={{ title: "Sobre" }} />
    </Stack.Navigator>
  )
}

export {
  MainStackNavigator,
  ContactStackNavigator,
  AboutStackNavigator
}