import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn} from "typeorm";
import { v4 as uuidv4 } from 'uuid';

@Entity('users')
export class Users {
    @PrimaryGeneratedColumn()
    readonly id!: string;

    @Column({ length: 225 })
    name!: string;

    @Column()
    email!: string;

    @Column({ length: 8 })
    password!: string;

    @CreateDateColumn()
    createdAt!: string;

    constructor(){
      if(!this.id) this.id = uuidv4().toString();
    }
}