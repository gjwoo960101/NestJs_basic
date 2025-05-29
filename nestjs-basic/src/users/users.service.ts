import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/usertDto';

@Injectable()
export class UsersService {
  async getUser(id: number): Promise<string> {
    return new Promise((reslove) => {
      setTimeout(() => {
        reslove(`User ${id}`);
      }, 1000);
    });
  }
  getUserDto(userdto: UserDto) {
    return `${userdto.name},${userdto.id},${userdto.age}`;
  }
}
