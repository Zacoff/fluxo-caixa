import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { Users } from './Users'
import { v4 as uuidv4 } from 'uuid'
@Entity('expenses')
export class Expenses {
  @PrimaryColumn()
  readonly id!: string;

  @Column({ nullable: false })
  userId!: string;

  @JoinColumn({ name: 'userId' })
  @ManyToOne(() => Users, user => user.id)
  users!: Users;

  @Column({ length: 225 })
  description!: string;

  @Column('float')
  value!: number;

  @Column({ length: 8 })
  createdAt!: string;

  constructor () {
    if (!this.id) this.id = uuidv4().toString()
  }
}
