import { Injectable } from '@nestjs/common';
import { CreateChiefDto } from './dto/create-chief.dto';
import { UpdateChiefDto } from './dto/update-chief.dto';

@Injectable()
export class ChiefsService {
  create(createChiefDto: CreateChiefDto) {
    return 'This action adds a new chief';
  }

  findAll() {
    return `This action returns all chiefs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} chief`;
  }

  update(id: number, updateChiefDto: UpdateChiefDto) {
    return `This action updates a #${id} chief`;
  }

  remove(id: number) {
    return `This action removes a #${id} chief`;
  }
}
