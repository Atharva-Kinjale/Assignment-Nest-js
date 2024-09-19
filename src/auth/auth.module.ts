import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { LoginCredentialsModule } from 'src/login-credentials/login-credentials.module';

@Module({
  imports:[LoginCredentialsModule,JwtModule.register({
    global:true,
    secret:jwtConstants.secret,
    signOptions:{expiresIn:'30s'}
  })],
  controllers: [AuthController],
  providers: [AuthService],
  exports:[AuthService]
})
export class AuthModule {}
