import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Chiefs } from "../../chiefs/entities/chief.entity";

@Entity()
export class CEO {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  companyName: string;

  @Column()
  ceoName: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @OneToMany(() => Chiefs, (chief) => chief.ceo)
  chiefs: Chiefs[];
}
