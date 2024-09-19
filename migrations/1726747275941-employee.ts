import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class Employee1726747275941 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Create 'employee' table
        await queryRunner.createTable(
          new Table({
            name: 'employee',
            columns: [
              {
                name: 'employee_Id',
                type: 'int',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment',
              },
              {
                name: 'user_Id',
                type: 'int',
                isUnique: true,
                isNullable: false,
              },
            ],
          }),
        );
    
        // Create foreign key for 'user_Id' with 'users' table
        await queryRunner.createForeignKey(
          'employee',
          new TableForeignKey({
            columnNames: ['user_Id'],
            referencedColumnNames: ['user_Id'],
            referencedTableName: 'users',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          }),
        );
      }
    
      public async down(queryRunner: QueryRunner): Promise<void> {
        // Drop foreign key first
        const table = await queryRunner.getTable('employee');
        const foreignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf('user_Id') !== -1);
        await queryRunner.dropForeignKey('employee', foreignKey);
    
        // Drop the 'employee' table
        await queryRunner.dropTable('employee');
      }

}
