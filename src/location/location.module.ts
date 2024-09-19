import { Module } from '@nestjs/common';
import { LocationService } from './location.service';
import { LocationsController } from './location.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Location } from './entities/location.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Location])],

  controllers: [LocationsController],
  providers: [LocationService],
  // exports:[Location]
})
export class LocationModule {}
