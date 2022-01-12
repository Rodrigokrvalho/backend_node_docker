import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { FindStorageByIdUseCase } from './FindStorageByIdUseCase'

class FindStorageByIdController {
  async handle (request: Request, response: Response): Promise <Response> {
    const { id } = request.body

    const findStorageByIdUseCase = container.resolve(FindStorageByIdUseCase)

    const storageItem = await findStorageByIdUseCase.execute({ id })

    return response.json(storageItem)
  }
}

export { FindStorageByIdController }
