import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

import { JwtService } from '@nestjs/jwt';
import { LoginCredentialsService } from 'src/login-credentials/login-credentials.service';

@Injectable()
export class AuthService {
  constructor(private login:LoginCredentialsService,private jwtService:JwtService){}
  async signIn(username:string,pass:string):Promise<any>{
    const user = await this.login.findOne(username);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    // const { password, ...result } = user;
    // // TODO: Generate a JWT and return it here
    // // instead of the user object
    // return result;

    const payload= {sub :user.userId,username:user.username}
    return{
      access_token:await this.jwtService.signAsync(payload)
    }
  }
}
