import { Injectable } from '@nestjs/common';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { Country } from './entities/country.entity';

@Injectable()
export class CountryService {
  constructor(@InjectRepository(Country) private readonly countryrepo:Repository<Country>){}
  async create(createCountryDto: CreateCountryDto) {
    // return 'This action adds a new country';
    const country=await this.countryrepo.create(createCountryDto)
    return this.countryrepo.save(country);
  }

  findAll() {
    // return `This action returns all country`;
    return this.countryrepo.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} country`;
  }

  update(id: number, updateCountryDto: UpdateCountryDto) {
    return `This action updates a #${id} country`;
  }

  remove(id: number) {
    return `This action removes a #${id} country`;
  }
}
