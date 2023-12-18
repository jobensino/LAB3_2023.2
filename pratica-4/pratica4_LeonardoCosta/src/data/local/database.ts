import { UserEntity } from './user-entity';
import { DataSource } from 'typeorm';

export const source = new DataSource({
  database: 'tasks.db',
  type: 'expo',
  driver: require('expo-sqlite'),
  entities: [UserEntity],
  synchronize: true,
});