import { Test, TestingModule } from '@nestjs/testing';
import { LeaderController } from './leader.controller';
import { LeaderService } from './leader.service';

describe('LeaderController', () => {
  let controller: LeaderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LeaderController],
      providers: [LeaderService],
    }).compile();

    controller = module.get<LeaderController>(LeaderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
