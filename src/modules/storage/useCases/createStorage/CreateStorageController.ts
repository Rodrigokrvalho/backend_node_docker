import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateStorageUseCase } from './CreateStorageUseCase'

class CreateStorageController {
  async handle (request: Request, response: Response): Promise<Response> {
    const {
      created_by,
      updated_by,
      location,
      cod,
      bar_code,
      description,
      vehicle_brand,
      vehicle_model,
      brand,
      conversion,
      volts,
      amount,
      info,
      picture
    } = request.body

    const createStorageUseCase = container.resolve(CreateStorageUseCase)

    await createStorageUseCase.execute({
      created_by,
      updated_by,
      location,
      cod,
      bar_code,
      description,
      vehicle_brand,
      vehicle_model,
      brand,
      conversion,
      volts,
      amount,
      info,
      picture
    })

    return response.status(201).send()
  }
}

export { CreateStorageController }
