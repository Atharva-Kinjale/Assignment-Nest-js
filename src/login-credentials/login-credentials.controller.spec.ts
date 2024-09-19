import { Test, TestingModule } from '@nestjs/testing';
import { LoginCredentialsController } from './login-credentials.controller';
import { LoginCredentialsService } from './login-credentials.service';

describe('LoginCredentialsController', () => {
  let controller: LoginCredentialsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LoginCredentialsController],
      providers: [LoginCredentialsService],
    }).compile();

    controller = module.get<LoginCredentialsController>(LoginCredentialsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
