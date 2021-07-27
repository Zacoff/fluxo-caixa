import { PrimaryGeneratedColumn , Entity, Column, OneToOne, JoinColumn} from "typeorm";
import { Users } from "./Users";

@Entity('revenues')
export class Revenues {

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
