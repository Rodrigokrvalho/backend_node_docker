import { Router } from 'express'
import { CreateStorageController } from '../modules/storage/useCases/createStorage/CreateStorageController'
import { FindStorageByDescriptionController } from '../modules/storage/useCases/findStorageByDescription/FindStorageByDescriptionController'
import { FindStorageByIdController } from '../modules/storage/useCases/findStorageById/FindStorageByIdController'
import { ListStorageController } from '../modules/storage/useCases/listStorage/ListStoragesController'

const storageRoutes = Router()

const createStorageController = new CreateStorageController()
const listStorageController = new ListStorageController()
const findStorageById = new FindStorageByIdController()
const findStorageByDescription = new FindStorageByDescriptionController()

storageRoutes.post('/', createStorageController.handle)

storageRoutes.get('/', listStorageController.handle)

storageRoutes.post('/find-by-id', findStorageById.handle)

storageRoutes.post('/find-by-description', findStorageByDescription.handle)

export { storageRoutes }
