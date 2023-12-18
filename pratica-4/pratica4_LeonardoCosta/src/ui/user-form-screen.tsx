import React, { useState, useRef } from 'react';
import { View, TextInput, ToastAndroid } from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import type { ScreenProps } from './navigation';
import { User } from '../data/user';
import { UsersRepository } from '../data/user-repository';
import { Fab } from './shared/fab';

const usersRepository = new UsersRepository();

export function UserFormScreen({
  navigation,
  route,
}: ScreenProps<'AddEditUser'>) {
  const userId = route.params?.userId;

  const query = useQuery({
    enabled: !!userId,
    queryKey: ['users', userId],
    queryFn() {
      return usersRepository.getUser(userId!);
    },
  });
  const user = query.data;

  const [formState, setFormState] = useState<Partial<User>>({});
  const onValueChange = (name: keyof typeof formState) => {
    return (text: string) => setFormState(prev => ({ ...prev, [name]: text }));
  };
  React.useEffect(() => {
    if (user) setFormState(user);
  }, [user]);

  const client = useQueryClient();
  const saveUserMutation = useMutation({
    async mutationFn(data: typeof formState) {
      return userId
        ? usersRepository.updateUser(userId, data)
        : usersRepository.createUser({
            name: data.name!,
            note: data.note!,
          });
    },
    onSuccess() {
      return client.invalidateQueries({ queryKey: ['users'] });
    },
  });

  const onSaveUser = () => {
    if (!formState.name || !formState.note) {
      return ToastAndroid.show('Preencha os campos', ToastAndroid.SHORT);
    }

    saveUserMutation.mutate(formState, {
      onSuccess() {
        navigation.goBack();
      },
    });
  };

  const descriptionRef = useRef<TextInput>(null);

  return (
    <View className="flex-1 px-6 py-4">
      <TextInput
        className="border-b border-gray-400 mb-6 h-12"
        autoFocus
        placeholder="Título"
        value={formState?.name}
        onChangeText={onValueChange('name')}
        returnKeyType="next"
        onSubmitEditing={() => descriptionRef.current?.focus()}
        blurOnSubmit={false}
      />
      <TextInput
        style={{ minHeight: 64 }}
        textAlignVertical="top"
        className="border-b border-gray-400"
        placeholder="Nota"
        value={String(formState?.note ?? '')}
        onChangeText={onValueChange('note')}
        returnKeyType="done"
        ref={descriptionRef}
        onSubmitEditing={onSaveUser}
        multiline
      />

      <Fab
        onPress={onSaveUser}
        icon={<Icon name="check" color="white" size={24} />}
      />
    </View>
  );
}
