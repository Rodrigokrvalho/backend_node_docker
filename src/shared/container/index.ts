import { container } from 'tsyringe'
import { InspectionsRepository } from '../../modules/inspection/repositories/Implementations/InspectionsRepository'
import { StorageRepository } from '../../modules/storage/repositories/implementations/StorageRepository'
import { IStorageRepository } from '../../modules/storage/repositories/IStorageRepository'
import { IInpectionsRepository } from '../../modules/inspection/repositories/IInspectionsRepository'

container.registerSingleton<IStorageRepository>(
  'StorageRepository',
  StorageRepository
)

container.registerSingleton<IInpectionsRepository>(
  'InspectionsRepository',
  InspectionsRepository
)
