import { Injectable } from '@nestjs/common';
import { CreateLeaderDto } from './dto/create-leader.dto';
import { UpdateLeaderDto } from './dto/update-leader.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Leader } from './entities/leader.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LeaderService {
  constructor(@InjectRepository(Leader) private readonly leaderRepo:Repository<Leader> ){}
  async create(createLeaderDto: CreateLeaderDto) {
    // return 'This action adds a new leader';
    const city=this.leaderRepo.create(createLeaderDto)
    return await this.leaderRepo.save(city)
  }

  async findAll() {
    return await this.leaderRepo.find({relations:{country:true}}) ;
  }

  findOne(id: number) {
    return `This action returns a #${id} leader`;
  }

  update(id: number, updateLeaderDto: UpdateLeaderDto) {
    return `This action updates a #${id} leader`;
  }

  remove(id: number) {
    return `This action removes a #${id} leader`;
  }
}
