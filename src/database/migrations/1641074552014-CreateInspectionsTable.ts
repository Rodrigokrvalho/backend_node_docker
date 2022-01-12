import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateInspectionsTable1641074552014 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'inspections',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true
          },
          {
            name: 'inspection_name',
            type: 'varchar'
          },
          {
            name: 'vehicle_board',
            type: 'varchar'
          },
          {
            name: 'last_inspection',
            type: 'timestamp'
          },
          {
            name: 'next_inspection',
            type: 'timestamp'
          },
          {
            name: 'created_by',
            type: 'varchar'
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()'
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()'
          },
          {
            name: 'unfinished',
            type: 'boolean'
          }
        ]
      })
    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
  }
}
