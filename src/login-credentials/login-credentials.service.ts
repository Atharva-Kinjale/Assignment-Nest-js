import { Injectable } from '@nestjs/common';
import { CreateLoginCredentialDto } from './dto/create-login-credential.dto';
import { UpdateLoginCredentialDto } from './dto/update-login-credential.dto';
export type User = any;

@Injectable()
export class LoginCredentialsService {
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];
  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
  // create(createLoginCredentialDto: CreateLoginCredentialDto) {
  //   return 'This action adds a new loginCredential';
  // }

  // findAll() {
  //   return `This action returns all loginCredentials`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} loginCredential`;
  // }

  // update(id: number, updateLoginCredentialDto: UpdateLoginCredentialDto) {
  //   return `This action updates a #${id} loginCredential`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} loginCredential`;
  // }
}
