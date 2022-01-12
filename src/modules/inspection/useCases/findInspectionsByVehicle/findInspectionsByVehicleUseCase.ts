import { inject, injectable } from 'tsyringe'
import { Inspections } from '../../entities/Inspections'
import { IInpectionsRepository } from '../../repositories/IInspectionsRepository'

interface IRequest {
  vehicle_board: string
}

@injectable()
class FindInspectionsByVehicleUseCase {
  constructor (
    @inject('InspectionsRepository')
    private inspectionsRepository: IInpectionsRepository
  ) {}

  execute ({ vehicle_board }:IRequest): Promise<Inspections[]> {
    const inspections = this.inspectionsRepository.findByVehicle(vehicle_board)

    return inspections
  }
}

export { FindInspectionsByVehicleUseCase }
