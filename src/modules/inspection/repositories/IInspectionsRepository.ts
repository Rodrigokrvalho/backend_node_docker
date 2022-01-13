import { Inspections } from '../entities/Inspections'

interface ICreateInspectionDTO {
  inspection_name: string
  vehicle_board: string
  last_inspection: Date
  next_inspection: Date
  created_by: string
}

interface IInpectionsRepository {
  create({
    inspection_name,
    vehicle_board,
    last_inspection,
    next_inspection,
    created_by
  }: ICreateInspectionDTO): Promise<void>
  listAll(): Promise<Inspections[]>
  listUnfinished(): Promise<Inspections[]>
  findByVehicle(vehicle_board: string): Promise<Inspections[]>
  findById(id: string): Promise<Inspections>
  findOneInspectionByVehicle(vehicle_board: string, inspection_name: string): Promise<Inspections>
  updateUnfinishedInspection(id: string): Promise<void>
  findInspectionsByDate(date_start: Date, date_end: Date): Promise<Inspections[]>
}

export { IInpectionsRepository, ICreateInspectionDTO }
