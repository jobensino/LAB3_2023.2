import React from 'react';
import { createNativeStackNavigator, NativeStackScreenProps,} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { UsersScreen } from './user-screen';
import { UserFormScreen } from './user-form-screen';
import { UserDetailsScreen } from './user-details.screen';

const Stack = createNativeStackNavigator<ParamList>();

export function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={UsersScreen}
          initialParams={{ filterType: 'all' }}
          options={() => ({
            title: 'Usuários',
            headerRight: UsersScreen.HeaderRight,
          })}
        />
        <Stack.Screen
          name="AddEditUser"
          component={UserFormScreen}
          options={({ route }) => ({
            title: route.params?.userId ? 'Edit User' : 'Add User',
          })}
        />
        <Stack.Screen
          name="UserDetails"
          component={UserDetailsScreen}
          options={{
            title: 'User Details',
            headerRight: UserDetailsScreen.HeaderRight,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

type ParamList = {
  Home: { filterType: string } | undefined;
  AddEditUser: { userId: number } | undefined;
  UserDetails: { userId: number };
};

export type ScreenProps<RouteName extends keyof ParamList> =
  NativeStackScreenProps<ParamList, RouteName>;
