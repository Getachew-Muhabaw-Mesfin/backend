import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
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
  reportTo: CEO;

  @OneToMany(() => Departments, (department) => department.chief)
  manages: Departments[];
}
