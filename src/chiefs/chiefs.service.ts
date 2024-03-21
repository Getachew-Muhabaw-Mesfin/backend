import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateChiefDto } from "./dto/create-chief.dto";
import { UpdateChiefDto } from "./dto/update-chief.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Chiefs } from "./entities/chief.entity";
import { CEO } from "../ceo/entities/ceo.entity";

@Injectable()
export class ChiefsService {
  constructor(
    @InjectRepository(Chiefs)
    private chiefRepository: Repository<Chiefs>,
    @InjectRepository(CEO) // Inject CEO repository
    private ceoRepository: Repository<CEO>, // Inject CEO repository
  ) {}

  async create(createChiefDto: CreateChiefDto) {
    const { ceoId, ...chiefData } = createChiefDto;

    // Check if CEO with given ceoId exists
    const ceo = await this.ceoRepository.findOne({ where: { id: ceoId } });
    if (!ceo) {
      throw new NotFoundException(`CEO with ID ${ceoId} not found`);
    }

    // Associate CEO with Chief entity
    const chief = this.chiefRepository.create({
      ...chiefData,
      ceo: ceo, // Assign CEO entity to chief
    });

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
