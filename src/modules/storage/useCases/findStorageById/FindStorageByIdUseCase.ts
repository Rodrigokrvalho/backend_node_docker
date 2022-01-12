import { inject, injectable } from 'tsyringe'
import { Storage } from '../../entities/Storage'
import { IStorageRepository } from '../../repositories/IStorageRepository'

interface IRequest {
  id: string
}

@injectable()
class FindStorageByIdUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    @inject('StorageRepository')
    private storageRepository: IStorageRepository
  ) {}

  async execute ({ id }: IRequest): Promise<Storage> {
    const storageItem = await this.storageRepository.findById(id)

    return storageItem
  }
}

export { FindStorageByIdUseCase }
