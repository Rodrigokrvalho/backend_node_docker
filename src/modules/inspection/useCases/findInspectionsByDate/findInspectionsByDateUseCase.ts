import { inject, injectable } from 'tsyringe'
import { Inspections } from '../../entities/Inspections'
import { IInpectionsRepository } from '../../repositories/IInspectionsRepository'

interface IRequest {
  date_start: Date
  date_end: Date
  unfinished: Boolean
}

@injectable()
class FindInspectionsByDateUseCase {
  constructor (
    @inject('InspectionsRepository')
    private inspectionsRepository: IInpectionsRepository
  ) {}

  execute ({ date_start, date_end, unfinished }:IRequest): Promise<Inspections[]> {
    const inspections = this.inspectionsRepository.findInspectionsByDate(date_start, date_end, unfinished)

    return inspections
  }
}

export { FindInspectionsByDateUseCase }
