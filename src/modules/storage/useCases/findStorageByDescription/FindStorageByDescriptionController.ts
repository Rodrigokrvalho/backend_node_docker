import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { FindStorageByDescriptionUseCase } from './FindStorageByDescriptionUseCase'

class FindStorageByDescriptionController {
  async handle (request: Request, response: Response): Promise<Response> {
    const { description } = request.body

    const findStorageByDescription = container.resolve(FindStorageByDescriptionUseCase)

    const storageItens = await findStorageByDescription.execute({ description })

    return response.json(storageItens)
  }
}

export { FindStorageByDescriptionController }
