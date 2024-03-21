import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateDepartmentDto } from "./dto/create-department.dto";
import { UpdateDepartmentDto } from "./dto/update-department.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Departments } from "./entities/department.entity";

@Injectable()
export class DepartmentsService {
  constructor(
    // add Departments Repository
    @InjectRepository(Departments)
    private departmentRepository: Repository<Departments>,
  ) {}
  async create(createDepartmentDto: CreateDepartmentDto) {
    const department = this.departmentRepository.create(createDepartmentDto);
    return await this.departmentRepository.save(department);
  }

  async findAll() {
    return await this.departmentRepository.find();
  }

  async findOne(id: number) {
    return await this.departmentRepository.findOne({ where: { id } });
  }

  async update(id: number, updateDepartmentDto: UpdateDepartmentDto) {
    const department = await this.findOne(id);
    if (!department) {
      throw new NotFoundException(`Department #${id} not found`);
    }
    Object.assign(department, updateDepartmentDto);
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
