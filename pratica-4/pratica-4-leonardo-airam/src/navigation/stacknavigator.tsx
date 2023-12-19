import { TransitionPresets, createStackNavigator } from '@react-navigation/stack';

import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { THomeStackParam, TScreenParamNavigation } from './types';
import { Home } from 'screens/Home';
import { Form } from 'screens/Form';
import { Details } from 'screens/Details';

const Stack = createStackNavigator<TScreenParamNavigation>();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#BB3508",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
  ...TransitionPresets.SlideFromRightIOS
};

const HeaderActions = ({ route, navigation  }: THomeStackParam) => {
  return (
    <TouchableOpacity onPress={() => navigation.push('Form')} style={{ marginRight: 10 }}>
      <Text style={{color: 'white'}}>Adicionar</Text>
    </TouchableOpacity>
  );
}


const StackNavigator = () => {

  return (
    <Stack.Navigator screenOptions={screenOptionStyle}  >
      <Stack.Screen
        name="Home"
        component={Home}
        options={({ route, navigation }: THomeStackParam) => ({
          title: 'Lista de Livros',
          headerRight: () => HeaderActions({ route, navigation }),
        })}
      />
      <Stack.Screen name="Form" component={Form} options={{title:"Novo"}} />
      <Stack.Screen name="Details" component={Details} options={{title:"Detalhes"}} />
    </Stack.Navigator>
  )
}

export { StackNavigator }