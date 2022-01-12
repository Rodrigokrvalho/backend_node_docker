import { Router } from 'express'
import { CreateInspectionController } from '../modules/inspection/useCases/createInspection/CreateInspectionController'
import { FindInspectionsByVehicleController } from '../modules/inspection/useCases/findInspectionsByVehicle/findInspectionsByVehicleController'
import { ListInspectionsController } from '../modules/inspection/useCases/listInspections/listInspectionsController'

const inspectionsRoutes = Router()

const createInspectionsController = new CreateInspectionController()
const listInspectionsController = new ListInspectionsController()
const findInspectionsByVehicleController = new FindInspectionsByVehicleController()

inspectionsRoutes.post('/', createInspectionsController.handle)
inspectionsRoutes.get('/', listInspectionsController.handle)
inspectionsRoutes.get('/find-by-vehicle', findInspectionsByVehicleController.handle)

export { inspectionsRoutes }
