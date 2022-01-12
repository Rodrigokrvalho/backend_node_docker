import { inject, injectable } from 'tsyringe'
import { Storage } from '../../entities/Storage'
import { IStorageRepository } from '../../repositories/IStorageRepository'

@injectable()
class ListStoragesUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    @inject('StorageRepository')
    private storageRepository: IStorageRepository
  ) {}

  async execute (): Promise<Storage[]> {
    const storages = await this.storageRepository.list()

    return storages
  }
}

export { ListStoragesUseCase }
