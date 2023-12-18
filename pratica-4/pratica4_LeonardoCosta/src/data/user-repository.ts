import { source } from './local/database';
import { UserEntity } from './local/user-entity';
import { User } from './user';

export class UsersRepository {
  async getUsers(): Promise<User[]> {
    if (!source.isInitialized) await source.initialize();

    const users = await UserEntity.find({
      order: { completed: { direction: 'ASC' } },
    });

    return users;
  }

  async getUser(userId: User['id']): Promise<User> {
    if (!source.isInitialized) await source.initialize();

    const user = await UserEntity.findOneByOrFail({ id: userId });
    return user;
  }

  async createUser(payload: Pick<UserEntity, 'name' | 'note'>) {
    if (!source.isInitialized) await source.initialize();

    const user = new UserEntity();
    user.name = payload.name;
    user.note = payload.note;
    await user.save();
  }

  async updateUser(
    userId: User['id'],
    payload: Partial<Pick<User, 'name' | 'note' | 'completed'>>
  ) {
    if (!source.isInitialized) await source.initialize();

    const user = await UserEntity.findOneByOrFail({ id: userId });
    user.name = payload.name ?? user.name;
    user.note = payload.note ?? user.note;
    user.completed = payload.completed ?? user.completed;
    await user.save();
  }

  async deleteUser(UserId: User['id']) {
    if (!source.isInitialized) await source.initialize();

    await UserEntity.delete(UserId);
  }
}
