import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateStorageTable1640612038863 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'storage',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true
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
            name: 'created_by',
            type: 'varchar'
          },
          {
            name: 'updated_by',
            type: 'varchar'
          },
          {
            name: 'location',
            type: 'varchar'
          },
          {
            name: 'cod',
            type: 'varchar'
          },
          {
            name: 'bar_code',
            type: 'varchar'
          },
          {
            name: 'description',
            type: 'varchar'
          },
          {
            name: 'vehicle_brand',
            type: 'varchar'
          },
          {
            name: 'vehicle_model',
            type: 'varchar'
          },
          {
            name: 'brand',
            type: 'varchar'
          },
          {
            name: 'conversion',
            type: 'varchar'
          },
          {
            name: 'volts',
            type: 'varchar'
          },
          {
            name: 'amount',
            type: 'varchar'
          },
          {
            name: 'info',
            type: 'varchar'
          },
          {
            name: 'picture',
            type: 'varchar'
          }
        ]
      })
    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
  }
}
