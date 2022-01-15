import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm'
import { v4 as uuidv4 } from 'uuid'

@Entity('fuelControl')
class FuelControl {
  @PrimaryColumn()
  id?: string

  @Column()
  place_fuel: string

  @Column()
  km_fuel: number

  @Column()
  amount_liters: number

  @Column()
  total_payed: number

  @Column()
  vehicle_board: string

  @Column()
  driver: string

  @Column()
  responsable_by_fuel: string

  @Column()
  fuel_type: string

  @CreateDateColumn()
  date_fuel: Date

  @CreateDateColumn()
  created_at: Date

  @Column()
  created_by: string

  constructor () {
    if (!this.id) {
      this.id = uuidv4()
    }
  }
}

export { FuelControl }
