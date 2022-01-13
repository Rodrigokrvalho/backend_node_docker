import { getRepository, Repository } from 'typeorm'
import { Inspections } from '../../entities/Inspections'
import { ICreateInspectionDTO, IInpectionsRepository } from '../IInspectionsRepository'

class InspectionsRepository implements IInpectionsRepository {
  private repository: Repository<Inspections>

  constructor () {
    this.repository = getRepository(Inspections)
  }

  async create ({ inspection_name, vehicle_board, last_inspection, next_inspection, created_by }: ICreateInspectionDTO): Promise<void> {
    const inspection = this.repository.create({
      inspection_name, vehicle_board, last_inspection, next_inspection, created_by
    })

    await this.repository.save(inspection)
  }

  async listAll (): Promise<Inspections[]> {
    const inspection = await this.repository.find()

    return inspection
  }

  async findOneInspectionByVehicle (vehicle_board: string, inspection_name: string) {
    const inspection = await this.repository.findOne({ vehicle_board, inspection_name })

    return inspection
  }

  async findById (id: string): Promise<Inspections> {
    const inspection = await this.repository.findOne({ id })

    return inspection
  }

  async findByVehicle (vehicle_board: string): Promise<Inspections[]> {
    const inspections = await this.repository.find({ vehicle_board })

    return inspections
  }

  async listUnfinished (): Promise<Inspections[]> {
    const inspections = await this.repository.find({ unfinished: true })

    return inspections
  }

  async updateUnfinishedInspection (id: string): Promise<void> {
    const date = new Date()
    await this.repository.update(id, { updated_at: date.toISOString(), unfinished: false })
  }

  async findInspectionsByDate (date_start: Date, date_end: Date): Promise<Inspections[]> {
    const inspections = await this.repository.createQueryBuilder('next_inspection').where('next_inspection >= :date_start', { date_start }).andWhere('next_inspection < :date_end', { date_end }).getMany()

    return inspections
  }
}

export { InspectionsRepository }
