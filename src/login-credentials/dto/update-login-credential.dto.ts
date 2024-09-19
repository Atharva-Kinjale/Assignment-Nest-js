import { PartialType } from '@nestjs/mapped-types';
import { CreateLoginCredentialDto } from './create-login-credential.dto';

export class UpdateLoginCredentialDto extends PartialType(CreateLoginCredentialDto) {}
