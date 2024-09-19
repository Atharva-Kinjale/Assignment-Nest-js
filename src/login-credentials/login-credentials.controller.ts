import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LoginCredentialsService } from './login-credentials.service';
import { CreateLoginCredentialDto } from './dto/create-login-credential.dto';
import { UpdateLoginCredentialDto } from './dto/update-login-credential.dto';

@Controller('login-credentials')
export class LoginCredentialsController {
  constructor(private readonly loginCredentialsService: LoginCredentialsService) {}

  // @Post()
  // create(@Body() createLoginCredentialDto: CreateLoginCredentialDto) {
  //   return this.loginCredentialsService.create(createLoginCredentialDto);
  // }

  // @Get()
  // findAll() {
  //   return this.loginCredentialsService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.loginCredentialsService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateLoginCredentialDto: UpdateLoginCredentialDto) {
  //   return this.loginCredentialsService.update(+id, updateLoginCredentialDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.loginCredentialsService.remove(+id);
  // }
}
