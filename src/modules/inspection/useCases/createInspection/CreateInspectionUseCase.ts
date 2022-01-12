import { inject, injectable } from 'tsyringe'
import { IInpectionsRepository } from '../../repositories/IInspectionsRepository'

interface IRequest {
  inspection_name: string
  vehicle_board: string
  last_inspection: Date
  next_inspection: Date
  created_by: string
}

@injectable()
class CreateInspectionUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    @inject('InspectionsRepository')
    private inspectionsRepository: IInpectionsRepository
  ) {}

  async execute ({
    inspection_name,
    vehicle_board,
    last_inspection,
    next_inspection,
    created_by
  }: IRequest): Promise <void> {
    const lastInspectionSave = await this.inspectionsRepository.findOneInspectionByVehicle(vehicle_board, inspection_name)

    if (lastInspectionSave) {
      console.log(lastInspectionSave.id)
      this.inspectionsRepository.updateUnfinishedInspection(lastInspectionSave.id)
    }

    this.inspectionsRepository.create({
      inspection_name,
      vehicle_board,
      last_inspection,
      next_inspection,
      created_by
    })
  }
}

export { CreateInspectionUseCase }
