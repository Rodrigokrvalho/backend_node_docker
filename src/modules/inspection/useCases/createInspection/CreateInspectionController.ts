import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateInspectionUseCase } from './CreateInspectionUseCase'

class CreateInspectionController {
  async handle (request: Request, response: Response):Promise<Response> {
    const {
      inspection_name,
      vehicle_board,
      last_inspection,
      next_inspection,
      created_by
    } = request.body

    const createInspectionUseCase = container.resolve(CreateInspectionUseCase)

    await createInspectionUseCase.execute({
      inspection_name,
      vehicle_board,
      last_inspection,
      next_inspection,
      created_by
    })

    return response.status(201).send()
  }
}

export { CreateInspectionController }
