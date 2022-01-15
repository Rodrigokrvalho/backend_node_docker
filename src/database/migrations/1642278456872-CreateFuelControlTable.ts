import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateFuelControlTable1642278456872 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'fuel_control',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true
          },
          {
            name: 'place_fuel',
            type: 'varchar'
          },
          {
            name: 'km_fuel',
            type: 'varchar'
          },
          {
            name: 'amount_liters',
            type: 'varchar'
          },
          {
            name: 'total_payed',
            type: 'varchar'
          },
          {
            name: 'vehicle_board',
            type: 'varchar'
          },
          {
            name: 'driver',
            type: 'varchar'
          },
          {
            name: 'responsable_by_fuel',
            type: 'varchar'
          },
          {
            name: 'fuel_type',
            type: 'varchar'
          },
          {
            name: 'date_fuel',
            type: 'timestamp'
          },
          {
            name: 'created_at',
            type: 'timestamp'
          },
          {
            name: 'created_by',
            type: 'varchar'
          }
        ]
      })
    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
  }
}
