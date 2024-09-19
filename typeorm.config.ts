import { CarMantainance } from "src/car-mantainance/entities/car-mantainance.entity";
import { Employee } from "src/employee/entities/employee.entity";
import { Location } from "src/location/entities/location.entity";
import { User } from "src/user/entities/user.entity";
import { DataSource } from "typeorm";

export default new DataSource({
    type: "mysql", // or mysql, sqlite, etc.
    host: "localhost",
    port: 3306,
    username: "root",
    password: "Atharva@123",
    database: "connection1",
    entities: [Location ,User,Employee,CarMantainance],
    migrations: ["migrations/*{.ts,.js}"],
    
  }
  )