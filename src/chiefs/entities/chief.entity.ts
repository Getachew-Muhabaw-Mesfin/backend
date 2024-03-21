import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { CEO } from "../../ceo/entities/ceo.entity";
import { Departments } from "../../departments/entities/department.entity";

@Entity()
export class Chiefs {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @ManyToOne(() => CEO, (ceo) => ceo.chiefs)
  ceo: CEO;

  @OneToMany(() => Departments, (department) => department.chief)
  departments: Departments[];
}
