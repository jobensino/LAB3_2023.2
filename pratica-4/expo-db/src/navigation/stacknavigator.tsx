import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from 'screen/home';
import { TScreenParamNavigation } from './types';

import { View,Text } from 'react-native';
// as telas a seguir devem ser implementadas adequamente
const Register = () => <View><Text>Novo</Text></View>
const Update = () => <View><Text>Atualizar</Text></View>
const Show = () => <View><Text>Visualizar</Text></View>
const ShowAll = () => <View><Text>Visualizar todos</Text></View>
const Delete = () => <View><Text>Excluir</Text></View>

const Stack = createNativeStackNavigator<TScreenParamNavigation>();

const screenOptionStyle = {
    headerStyle: {
      backgroundColor: "#BB3508",
    },
    headerTintColor: "white",
    headerBackTitle: "Back",
  };

const StackNavigator = () => {
  
  return (
      <Stack.Navigator screenOptions={screenOptionStyle} >
        <Stack.Screen name="home" component={Home} options={{title:"Home"}} />
        <Stack.Screen name="register" component={Register} options={{title:"Novo"}} />
        <Stack.Screen name="update" component={Update} options={{title:"Atualizar"}} />
        <Stack.Screen name="show" component={Show} options={{title:"Visualizar"}} />
        <Stack.Screen name="showall" component={ShowAll} options={{title:"Visualizar todos"}} />
        <Stack.Screen name="delete" component={Delete} options={{title:"Excluir"}} />
      </Stack.Navigator>
  )
}

export {StackNavigator}