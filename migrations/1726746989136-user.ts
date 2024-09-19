import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class User1726746989136 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Create 'users' table
        await queryRunner.createTable(
          new Table({
            name: 'users',
            columns: [
              {
                name: 'user_Id',
                type: 'int',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment',
              },
              {
                name: 'F_Name',
                type: 'varchar',
              },
              {
                name: 'L_Name',
                type: 'varchar',
              },
              {
                name: 'Email',
                type: 'varchar',
                isUnique: true,
              },
              {
                name: 'Contact_No',
                type: 'varchar',
              },
              {
                name: 'Gender',
                type: 'enum',
                enum: ['male', 'female', 'other'],
              },
              {
                name: 'pinCode',
                type: 'int',
              },
              {
                name: 'CreatedAt',
                type: 'timestamp',
                default: 'now()',
              },
              {
                name: 'CreatedBy',
                type: 'int',
                isNullable: true,
              },
              {
                name: 'UpdatedAt',
                type: 'timestamp',
                isNullable: true,
              },
              {
                name: 'UpdatedBy',
                type: 'int',
                isNullable: true,
              },
              {
                name: 'DeletedAt',
                type: 'timestamp',
                isNullable: true,
              },
            ],
          }),
        );
    
        // Create foreign key relation with 'locations' table
        await queryRunner.createForeignKey(
          'users',
          new TableForeignKey({
            columnNames: ['pinCode'],
            referencedColumnNames: ['pincode'],
            referencedTableName: 'locations',
            onDelete: 'CASCADE',
          }),
        );
      }
    
      public async down(queryRunner: QueryRunner): Promise<void> {
        // Drop foreign key first
        const table = await queryRunner.getTable('users');
        const foreignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf('pinCode') !== -1);
        await queryRunner.dropForeignKey('users', foreignKey);
    
        // Drop the 'users' table
        await queryRunner.dropTable('users');
      }

}
