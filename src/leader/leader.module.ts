import { Module } from '@nestjs/common';
import { LeaderService } from './leader.service';
import { LeaderController } from './leader.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Leader } from './entities/leader.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Leader])],
  controllers: [LeaderController],
  providers: [LeaderService],
})
export class LeaderModule {}
