import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { FindInspectionsByVehicleUseCase } from './findInspectionsByVehicleUseCase'

class FindInspectionsByVehicleController {
  async handle (request: Request, response: Response): Promise<Response> {
    const { vehicle_board } = request.body
    const findInspectionsByVehicleUseCase = container.resolve(FindInspectionsByVehicleUseCase)

    const inspectionsFounded = await findInspectionsByVehicleUseCase.execute({ vehicle_board })

    return response.json(inspectionsFounded)
  }
}

export { FindInspectionsByVehicleController }
