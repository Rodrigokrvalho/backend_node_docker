import { getRepository, Repository } from 'typeorm'
import { Storage } from '../../entities/Storage'
import { ICreateStorageDTO, IStorageRepository } from '../IStorageRepository'

class StorageRepository implements IStorageRepository {
  private repository: Repository<Storage>

  constructor () {
    this.repository = getRepository(Storage)
  }

  async create ({
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
  }:ICreateStorageDTO):Promise<void> {
    const storage = this.repository.create({
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

    await this.repository.save(storage)
  }

  async list (): Promise<Storage[]> {
    const storage = await this.repository.find()

    return storage
  }

  async findById (id: string): Promise<Storage> {
    const item = await this.repository.findOne({ id })

    return item
  }

  async findAllByDescription (description: string): Promise<Storage[]> {
    const itens = await this.repository.createQueryBuilder('description').where('description like :description', { description: `%${description.replace(' ', '%')}%` })
      .getMany()

    return itens
  }
}

export { StorageRepository }
