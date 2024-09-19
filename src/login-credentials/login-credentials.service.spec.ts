import { Test, TestingModule } from '@nestjs/testing';
import { LoginCredentialsService } from './login-credentials.service';

describe('LoginCredentialsService', () => {
  let service: LoginCredentialsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoginCredentialsService],
    }).compile();

    service = module.get<LoginCredentialsService>(LoginCredentialsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
