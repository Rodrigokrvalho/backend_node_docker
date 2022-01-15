import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { FindInspectionsByDateUseCase } from './findInspectionsByDateUseCase'

class FindInspectionsByDateController {
  async handle (request: Request, response: Response): Promise<Response> {
    const { date_start, date_end, unfinished } = request.body

    const findInspectionsByDateUseCase = container.resolve(FindInspectionsByDateUseCase)

    const inspectionsFounded = await findInspectionsByDateUseCase.execute({ date_start, date_end, unfinished })

    return response.json(inspectionsFounded)
  }
}

export { FindInspectionsByDateController }
