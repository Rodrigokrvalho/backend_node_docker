import { inject, injectable } from 'tsyringe'
import { Storage } from '../../entities/Storage'
import { IStorageRepository } from '../../repositories/IStorageRepository'

interface IRequest {
  description: string
}

@injectable()
class FindStorageByDescriptionUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    @inject('StorageRepository')
    private storageRepository: IStorageRepository
  ) {}

  async execute ({ description }: IRequest): Promise<Storage[]> {
    const storageItens = await this.storageRepository.findAllByDescription(description)

    return storageItens
  }
}

export { FindStorageByDescriptionUseCase }
