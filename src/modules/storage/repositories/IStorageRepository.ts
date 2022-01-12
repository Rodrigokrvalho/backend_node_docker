import { Storage } from '../entities/Storage'

interface ICreateStorageDTO {
  created_by: string
  updated_by: string
  location: string
  cod: number
  bar_code: number
  description: string
  vehicle_brand: string
  vehicle_model: string
  brand: string
  conversion: string
  volts: string
  amount: number
  info: string
  picture: string
}

interface IStorageRepository {
  create({
    created_by,
    updated_by,
    location,
    cod,
    bar_code,
    description,
    vehicle_brand,
    vehicle_model,
    brand,
    conversion,
    volts,
    amount,
    info,
    picture
  }: ICreateStorageDTO): Promise<void>
  list(): Promise<Storage[]>
  findById(id: string): Promise<Storage>
  findAllByDescription(description: string): Promise<Storage[]>
}

export { ICreateStorageDTO, IStorageRepository }
