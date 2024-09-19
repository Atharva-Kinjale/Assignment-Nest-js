import { getConnection } from 'typeorm';

export async function statConn(repo) {
  // Get a query runner from the TypeORM connection manager
  const queryRunner = repo.manager.connection.createQueryRunner();
  
  // Establish the database connection
  await queryRunner.connect();
  
  // Start a new transaction
  await queryRunner.startTransaction();
  
  // Return the query runner for further use
  return queryRunner;
}
