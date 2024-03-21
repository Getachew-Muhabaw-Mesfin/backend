import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateChiefDto } from "./dto/create-chief.dto";
import { UpdateChiefDto } from "./dto/update-chief.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Chiefs } from "./entities/chief.entity";

@Injectable()
export class ChiefsService {
  constructor(
    @InjectRepository(Chiefs)
    private chiefRepository: Repository<Chiefs>,
  ) {}
  async create(createChiefDto: CreateChiefDto) {
    const chief = this.chiefRepository.create(createChiefDto);
    return await this.chiefRepository.save(chief);
  }

  async findAll() {
    return await this.chiefRepository.find();
  }

  async findOne(id: number) {
    return await this.chiefRepository.findOne({ where: { id } });
  }

  async update(id: number, updateChiefDto: UpdateChiefDto) {
    const chief = await this.findOne(id);
    if (!chief) {
      throw new NotFoundException(`Chief #${id} not found`);
    }
    Object.assign(chief, updateChiefDto);
    return await this.chiefRepository.save(chief);
  }

  async remove(id: number) {
    const chief = await this.findOne(id);
    if (!chief) {
      throw new NotFoundException(`Chief #${id} not found`);
    }
    return await this.chiefRepository.remove(chief);
  }
}
