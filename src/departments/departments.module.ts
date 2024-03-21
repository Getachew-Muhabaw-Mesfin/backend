import { Module } from "@nestjs/common";
import { DepartmentsService } from "./departments.service";
import { DepartmentsController } from "./departments.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Departments } from "./entities/department.entity";
import { Chiefs } from "src/chiefs/entities/chief.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Departments, Chiefs])],
  controllers: [DepartmentsController],
  providers: [DepartmentsService],
})
export class DepartmentsModule {}
