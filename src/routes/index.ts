import { Router } from 'express'
import { inspectionsRoutes } from './inspections.routes'
import { storageRoutes } from './storage.routes'

const router = Router()

router.use('/storage', storageRoutes)

router.use('/inspections', inspectionsRoutes)

export { router }
