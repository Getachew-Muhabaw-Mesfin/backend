import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateDepartmentDto } from "./dto/create-department.dto";
import { UpdateDepartmentDto } from "./dto/update-department.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Departments } from "./entities/department.entity";
import { Chiefs } from "../chiefs/entities/chief.entity";

@Injectable()
export class DepartmentsService {
  constructor(
    @InjectRepository(Departments)
    private departmentRepository: Repository<Departments>,
    @InjectRepository(Chiefs)
    private chiefRepository: Repository<Chiefs>,
  ) {}

  async create(createDepartmentDto: CreateDepartmentDto) {
    const { chiefId, ...departmentData } = createDepartmentDto;

    // Check if the provided chiefId exists
    const chief = await this.chiefRepository.findOne({
      where: { id: chiefId },
    });
    if (!chief) {
      throw new NotFoundException(`Chief with ID ${chiefId} not found`);
    }

    // Create and save department entity
    const department = this.departmentRepository.create({
      ...departmentData,
      chief: chief,
    });
    return await this.departmentRepository.save(department);
  }

  async findAll() {
    return await this.departmentRepository.find();
  }

  async findOne(id: number) {
    return await this.departmentRepository.findOne({ where: { id } });
  }

  async update(id: number, updateDepartmentDto: UpdateDepartmentDto) {
    const department = await this.departmentRepository.findOne({
      where: { id },
    });
    if (!department) {
      throw new NotFoundException(`Department #${id} not found`);
    }

    // Update department properties
    department.name = updateDepartmentDto.name || department.name;
    department.description =
      updateDepartmentDto.description || department.description;

    // Update chiefId if provided in the updateDepartmentDto
    if (updateDepartmentDto.chiefId) {
      const chief = await this.chiefRepository.findOne({
        where: { id: updateDepartmentDto.chiefId },
      });
      if (!chief) {
        throw new NotFoundException(
          `Chief #${updateDepartmentDto.chiefId} not found`,
        );
      }
      department.chief = chief;
    }

    // Save and return the updated department
    return await this.departmentRepository.save(department);
  }

  async remove(id: number) {
    const department = await this.findOne(id);
    if (!department) {
      throw new NotFoundException(`Department #${id} not found`);
    }
    return this.departmentRepository.remove(department);
  }
}
