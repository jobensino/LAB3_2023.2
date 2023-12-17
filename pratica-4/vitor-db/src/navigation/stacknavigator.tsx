import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from 'screen/home';
import { TScreenParamNavigation } from './types';
import * as React from 'react';


import { AdicionarCliente, VerCliente, VerTodosClientes, DeletarCliente, EditarCliente } from 'db/servicos';

// as telas a seguir devem ser implementadas adequamente
const Register = () => <AdicionarCliente/>
const Update = () => <EditarCliente/>
const Show = () => <VerCliente/>
const ShowAll = () => <VerTodosClientes/>
const Delete = () => <DeletarCliente/>

const Stack = createNativeStackNavigator<TScreenParamNavigation>();

const screenOptionStyle = {
    headerStyle: {
      backgroundColor: "black",
    },
    headerTintColor: "white",
    headerBackTitle: "Back",
  };

const StackNavigator = () => {
  
  return (
      <Stack.Navigator screenOptions={screenOptionStyle} >
        <Stack.Screen name="home" component={Home} options={{title:"Feira do povo - Clientes"}} />
        <Stack.Screen name="register" component={Register} options={{title:"Cadastrar Cliente"}} />
        <Stack.Screen name="update" component={Update} options={{title:"Atualizar Cliente"}} />
        <Stack.Screen name="show" component={Show} options={{title:"Consultar Cliente"}} />
        <Stack.Screen name="showall" component={ShowAll} options={{title:"Clientes Cadastrados"}} />
        <Stack.Screen name="delete" component={Delete} options={{title:"Excluir Cliente"}} />
      </Stack.Navigator>
  )
}

export {StackNavigator}