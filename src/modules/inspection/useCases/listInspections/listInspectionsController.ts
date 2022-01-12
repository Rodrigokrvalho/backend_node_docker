import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ListInspectionsUseCase } from './listInspectionsUseCase'

class ListInspectionsController {
  async handle (request: Request, response: Response): Promise<Response> {
    const listInspectionsUseCase = container.resolve(ListInspectionsUseCase)

    const all = await listInspectionsUseCase.execute()

    return response.json(all)
  }
}

export { ListInspectionsController }
