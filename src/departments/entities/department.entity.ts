// departments.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Chiefs } from "../../chiefs/entities/chief.entity";

@Entity()
export class Departments {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @ManyToOne(() => Chiefs, (chief) => chief.departments)
  chief: Chiefs;
}
