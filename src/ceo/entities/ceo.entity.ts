import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Chiefs } from "../../chiefs/entities/chief.entity";

@Entity()
export class CEO {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  company_name: string;

  @Column()
  ceo_name: string;

  @OneToMany(() => Chiefs, (chief) => chief.ceo)
  chiefs: Chiefs[];
}
