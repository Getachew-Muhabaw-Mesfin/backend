import { Injectable } from '@nestjs/common';
import { CreateCeoDto } from './dto/create-ceo.dto';
import { UpdateCeoDto } from './dto/update-ceo.dto';

@Injectable()
export class CeoService {
  create(createCeoDto: CreateCeoDto) {
    return 'This action adds a new ceo';
  }

  findAll() {
    return `This action returns all ceo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ceo`;
  }

  update(id: number, updateCeoDto: UpdateCeoDto) {
    return `This action updates a #${id} ceo`;
  }

  remove(id: number) {
    return `This action removes a #${id} ceo`;
  }
}
