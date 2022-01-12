import { inject, injectable } from 'tsyringe'
import { IStorageRepository } from '../../repositories/IStorageRepository'

interface IRequest {
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

@injectable()
class CreateStorageUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    @inject('StorageRepository')
    private storageRepository: IStorageRepository
  ) {}

  async execute ({
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
  }: IRequest): Promise<void> {
    // falta verificação

    this.storageRepository.create({
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
    })
  }
}

export { CreateStorageUseCase }
