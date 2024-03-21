import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateCeoDto } from "./dto/create-ceo.dto";
import { UpdateCeoDto } from "./dto/update-ceo.dto";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CEO } from "./entities/ceo.entity";

@Injectable()
export class CeoService {
  constructor(
    @InjectRepository(CEO) private readonly CeoRepository: Repository<CEO>,
  ) {}
  async create(createCeoDto: CreateCeoDto) {
    const ceo = this.CeoRepository.create(createCeoDto);
    return await this.CeoRepository.save(ceo);
  }

  async findAll() {
    return await this.CeoRepository.find();
  }

  async findOne(id: number) {
    return await this.CeoRepository.findOne({ where: { id } });
  }

  async update(id: number, updateCeoDto: UpdateCeoDto) {
    const ceo = await this.findOne(id);
    if (!ceo) {
      throw new NotFoundException(`Ceo #${id} not found`);
    }
    Object.assign(ceo, updateCeoDto);

    return this.CeoRepository.save(ceo);
  }

  async remove(id: number) {
    const ceo = await this.findOne(id);
    if (!ceo) {
      throw new NotFoundException(`Ceo #${id} not found`);
    }
    return this.CeoRepository.remove(ceo);
  }
}
