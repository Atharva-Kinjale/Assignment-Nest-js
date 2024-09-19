import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CarMaintanace1726747401907 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Create 'carMaintainance' table
        await queryRunner.createTable(
          new Table({
            name: 'carMaintainance',
            columns: [
              {
                name: 'service_Id',
                type: 'int',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment',
              },
              {
                name: 'serviceName',
                type: 'varchar',
                isUnique: true,
              },
              {
                name: 'timeRequired',
                type: 'time',
              },
              {
                name: 'description',
                type: 'text',
                isNullable: true,
              },
              {
                name: 'cost',
                type: 'decimal',
              },
              {
                name: 'pincode',
                type: 'int',
              },
            ],
          }),
        );
    
        // Create foreign key relation with 'locations' table
        await queryRunner.createForeignKey(
          'carMaintainance',
          new TableForeignKey({
            columnNames: ['pincode'],
            referencedColumnNames: ['pincode'],
            referencedTableName: 'locations',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          }),
        );
      }
    
      public async down(queryRunner: QueryRunner): Promise<void> {
        // Drop foreign key first
        const table = await queryRunner.getTable('carMaintainance');
        const foreignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf('pincode') !== -1);
        await queryRunner.dropForeignKey('carMaintainance', foreignKey);
    
        // Drop the 'carMaintainance' table
        await queryRunner.dropTable('carMaintainance');
      }

}
