import { inject, injectable } from 'tsyringe'
import { Inspections } from '../../entities/Inspections'
import { IInpectionsRepository } from '../../repositories/IInspectionsRepository'

@injectable()
class ListInspectionsUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    @inject('InspectionsRepository')
    private inspectionsRepository: IInpectionsRepository
  ) {}

  async execute (): Promise<Inspections[]> {
    const inspections = await this.inspectionsRepository.listAll()

    return inspections
  }
}

export { ListInspectionsUseCase }
