/* eslint-disable camelcase */

import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm'
import { v4 as uuidv4 } from 'uuid'

@Entity('inspections')
class Inspections {
  @PrimaryColumn()
  id?: string

  @Column()
  inspection_name: string

  @Column()
  vehicle_board: string

  @CreateDateColumn()
  last_inspection: Date

  @CreateDateColumn()
  next_inspection: Date

  @CreateDateColumn()
  created_at: Date

  @CreateDateColumn()
  updated_at: Date

  @Column()
  created_by: string

  @Column()
  unfinished?: boolean

  constructor () {
    if (!this.id) {
      this.id = uuidv4()
    }

    this.unfinished = true
  }
}

export { Inspections }
