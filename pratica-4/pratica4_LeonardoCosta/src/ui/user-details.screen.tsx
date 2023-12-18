import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, Pressable, ToastAndroid } from 'react-native';
import Icon from '@expo/vector-icons/MaterialIcons';
import { ScreenProps } from './navigation';
import { UsersRepository } from '../data/user-repository';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Fab } from './shared/fab';

const usersRepository = new UsersRepository();

export function UserDetailsScreen({
  navigation,
  route,
}: ScreenProps<'UserDetails'>) {
  const userId = route.params.userId;

  const query = useQuery({
    queryKey: ['users', userId],
    queryFn() {
      return usersRepository.getUser(userId);
    },
  });
  const user = query.data;

  const client = useQueryClient();
  const onToggleUserCompleted = async () => {
    ToastAndroid.show(
      `User marked as ${user?.completed ? 'completed' : 'active'}`,
      ToastAndroid.SHORT
    );
    await usersRepository.updateUser(userId, { completed: !user?.completed });
    client.invalidateQueries({ queryKey: ['users'] });
  };

  return (
    <View className="flex-1 px-6 py-6">
      <View className="flex-row items-start">
        <Pressable
          className="px-2 py-2"
          onPress={() => {
            onToggleUserCompleted();
          }}
        >
          <View className="w-6 h-6 items-center justify-center rounded border">
            {user?.completed ? <Icon name="check" size={20} /> : null}
          </View>
        </Pressable>

        <View className="ml-2">
            <Text className="text-xl">{user?.name}</Text>
            <Text className="text-lg text-gray-600">{user?.note}</Text>
        </View>
      </View>

       <Fab
         icon={<Icon name="edit" size={24} color="white" />}
         onPress={() => navigation.navigate('AddEditUser', { userId })}
       />
    </View>
   );
}

UserDetailsScreen.HeaderRight = function HeaderRight() {
  const navigation = useNavigation<ScreenProps<'UserDetails'>['navigation']>();
  const route = useRoute<ScreenProps<'UserDetails'>['route']>();

  const client = useQueryClient();

  const onDeleteUser = () => {
    usersRepository
      .deleteUser(route.params?.userId)
      .then(() => client.invalidateQueries({ queryKey: ['users'] }));
    ToastAndroid.show('Usuário deletado', ToastAndroid.SHORT);
    navigation.goBack();
  };

  return (
    <Pressable
      className="rounded-full"
      onPress={() => {
        onDeleteUser();
      }}
    >
      <Icon name="delete-outline" size={24} color="rgb(21 128 61)" />
    </Pressable>
  );
};
