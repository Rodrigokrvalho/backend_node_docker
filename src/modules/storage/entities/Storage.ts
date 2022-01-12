/* eslint-disable camelcase */
import { v4 as uuidv4 } from 'uuid'
import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm'

@Entity('storage')
class Storage {
  @PrimaryColumn()
  id?: string

  @CreateDateColumn()
  created_at: Date

  @CreateDateColumn()
  updated_at: Date

  @Column()
  created_by: string

  @Column()
  updated_by: string

  @Column()
  location: string

  @Column()
  cod: number

  @Column()
  bar_code: number

  @Column()
  description: string

  @Column()
  vehicle_brand: string

  @Column()
  vehicle_model: string

  @Column()
  brand: string

  @Column()
  conversion: string

  @Column()
  volts: string

  @Column()
  amount: number

  @Column()
  info: string

  @Column()
  picture: string

  constructor () {
    if (!this.id) {
      this.id = uuidv4()
    }
  }
}

export { Storage }
