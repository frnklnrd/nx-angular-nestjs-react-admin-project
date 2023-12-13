import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1,
      username: 'user',
      password: 'user',
      roles: [],
    },
    {
      id: 2,
      username: 'admin',
      password: 'admin',
      roles: ['ADMIN'],
    },
    {
      id: 3,
      username: 'string',
      password: 'string',
      roles: [],
    },
    {
      id: 4,
      username: 'user4',
      password: 'pass4',
      roles: [],
    },
    {
      id: 5,
      username: 'user5',
      password: 'pass5',
      roles: [],
    },
    {
      id: 6,
      username: 'user6',
      password: 'pass6',
      roles: [],
    },
    {
      id: 7,
      username: 'user7',
      password: 'pass7',
      roles: [],
    },
    {
      id: 8,
      username: 'user8',
      password: 'pass8',
      roles: [],
    },
    {
      id: 9,
      username: 'user9',
      password: 'pass9',
      roles: [],
    },
    {
      id: 10,
      username: 'user10',
      password: 'pass10',
      roles: [],
    },
    {
      id: 11,
      username: 'user11',
      password: 'pass11',
      roles: [],
    },
    {
      id: 12,
      username: 'user12',
      password: 'pass12',
      roles: [],
    },
    {
      id: 13,
      username: 'user13',
      password: 'pass13',
      roles: [],
    },
    {
      id: 14,
      username: 'user14',
      password: 'pass14',
      roles: [],
    },
    {
      id: 15,
      username: 'user15',
      password: 'pass15',
      roles: [],
    },
    {
      id: 16,
      username: 'user16',
      password: 'pass16',
      roles: [],
    },
    {
      id: 17,
      username: 'user17',
      password: 'pass17',
      roles: [],
    },
    {
      id: 18,
      username: 'user18',
      password: 'pass18',
      roles: [],
    },
  ];

  async findByUsername(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users.find((el) => el.id === id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
