import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateDepartmentDto {
  name: string;
  description: string;
  @IsNotEmpty()
  @IsNumber()
  chiefId: number;
}
