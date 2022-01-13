import { Router } from 'express'
import { CreateInspectionController } from '../modules/inspection/useCases/createInspection/CreateInspectionController'
import { FindInspectionsByDateController } from '../modules/inspection/useCases/findInspectionsByDate/findInspectionsByDateController'
import { FindInspectionsByVehicleController } from '../modules/inspection/useCases/findInspectionsByVehicle/findInspectionsByVehicleController'
import { ListInspectionsController } from '../modules/inspection/useCases/listInspections/listInspectionsController'

const inspectionsRoutes = Router()

const createInspectionsController = new CreateInspectionController()
const listInspectionsController = new ListInspectionsController()
const findInspectionsByVehicleController = new FindInspectionsByVehicleController()
const findInspectionsByDateController = new FindInspectionsByDateController()

inspectionsRoutes.post('/', createInspectionsController.handle)
inspectionsRoutes.get('/', listInspectionsController.handle)
inspectionsRoutes.get('/find-by-vehicle', findInspectionsByVehicleController.handle)
inspectionsRoutes.get('/find-by-date', findInspectionsByDateController.handle)

export { inspectionsRoutes }
