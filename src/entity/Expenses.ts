import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from "typeorm";
import { Users } from "./Users";

@Entity('expenses')
export class Expenses {
  
  @PrimaryGeneratedColumn()
  readonly id!: number;

  @OneToOne(() => Users)
  @JoinColumn()
  users!: Users;

  @Column({ length: 225 })
  description!: string;

  @Column('float')
  value!: number;

  @Column({ length: 8 })
  createdAt!: string;
}