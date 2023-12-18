import React from 'react';
import { View, Text, Pressable, FlatList } from 'react-native';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { Menu, MenuOption, MenuOptions, MenuTrigger,} from 'react-native-popup-menu';
import { User } from '../data/user';
import { UsersRepository } from '../data/user-repository';
import { ScreenProps } from './navigation';
import { Fab } from './shared/fab';

const usersRepository = new UsersRepository();

export function UsersScreen({ route, navigation }: ScreenProps<'Home'>) {
  const filterType = route.params?.filterType;

  const query = useQuery({
    queryKey: ['users'],
    async queryFn() {
      return usersRepository.getUsers();
    },
    select(data: any[]) {
        if (filterType === 'all') return data;
        return data.filter(it =>
          filterType === 'completed' ? it.completed : !it.completed
        );
      },
    });

  const users = query.data;

  const isManualRefetch = React.useRef(false);
  const refreshing = query.isFetching && isManualRefetch.current;
  const onRefresh = async () => {
    isManualRefetch.current = true;
    await query.refetch();
    isManualRefetch.current = false;
  };

  const renderListTitle = () => {
    switch (filterType) {
      case 'completed':
        return 'Completed';
      case 'active':
        return 'Active';
      default:
        return 'All';
    }
  };

  return (
    <View className="flex-1">
      <FlatList
        className="flex-1 px-4 py-4"
        refreshing={refreshing}
        onRefresh={onRefresh}
        data={users}
        renderItem={({ item }) => <UserItem user={item} />}
        keyExtractor={it => String(it.id)}
        ListHeaderComponent={
          <Text className="font-medium text-base mb-2">
            {renderListTitle()} Users
          </Text>
        }
      />

       <Fab
         onPress={() => navigation.navigate('AddEditUser')}
         icon={<Icon name="plus" size={24} color="white" />}
       />
     </View>
   );
 }

function UserItem({ user }: { user: User }) {
  const client = useQueryClient();

  const onToggleUserCompleted = async () => {
    await usersRepository.updateUser(user.id, { completed: !user.completed });
    client.invalidateQueries({ queryKey: ['users'] });
  };

  const navigation = useNavigation<ScreenProps<'Home'>['navigation']>();

  return (
    <Pressable
      className="flex-row items-center py-2"
      onPress={() => {
        navigation.navigate('UserDetails', { userId: user.id });
      }}
    >
      <Pressable
        className="px-2 py-2"
        onPress={() => {
          onToggleUserCompleted();
        }}
      >
         <View className="w-6 h-6 items-center justify-center rounded border">
           {user.completed ? <Icon name="check" size={20} /> : null}
         </View>
       </Pressable>

//       <Text className="ml-3">{user.name}</Text>
//     </Pressable>
   );
 }

UsersScreen.HeaderRight = function () {
  const navigation = useNavigation<ScreenProps<'Home'>['navigation']>();

  const onFilterChange = (type: string) =>
    navigation.setParams({ filterType: type });

  return (
    <Menu>
      <MenuTrigger style={{ padding: 12 }}>
        <Icon name="filter" size={20} color="rgb(21 128 61)" />
      </MenuTrigger>
      <MenuOptions>
        <MenuOption
          style={{ padding: 12 }}
          onSelect={() => onFilterChange('all')}
          text="All"
        />
        <MenuOption
          style={{ padding: 12 }}
          onSelect={() => onFilterChange('active')}
          text="Active"
        />
        <MenuOption
          style={{ padding: 12 }}
          onSelect={() => onFilterChange('completed')}
          text="Completed"
        />
      </MenuOptions>
    </Menu>
  );
};
