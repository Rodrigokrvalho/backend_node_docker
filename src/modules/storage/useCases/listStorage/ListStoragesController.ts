import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ListStoragesUseCase } from './ListStoragesUseCase'

class ListStorageController {
  async handle (request: Request, response: Response): Promise<Response> {
    const listStorageUseCase = container.resolve(ListStoragesUseCase)

    const all = await listStorageUseCase.execute()

    return response.json(all)
  }
}

export { ListStorageController }
