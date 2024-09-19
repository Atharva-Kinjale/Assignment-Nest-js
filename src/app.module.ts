import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocationModule } from './location/location.module';
import { Location } from './location/entities/location.entity';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { Employee } from './employee/entities/employee.entity';
import { EmployeeModule } from './employee/employee.module';
import { CarMantainanceModule } from './car-mantainance/car-mantainance.module';
import { CarMantainance } from './car-mantainance/entities/car-mantainance.entity';
import { LoggingMiddleware } from './logging/logging.middleware';
import { AuthModule } from './auth/auth.module';
import { LoginCredentialsModule } from './login-credentials/login-credentials.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Atharva@123',
      database: 'connection1',
      entities: [Location ,User,Employee,CarMantainance],
      synchronize: false,
    }),
    LocationModule,
    UserModule,
    EmployeeModule,
    CarMantainanceModule,
    AuthModule,
    LoginCredentialsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggingMiddleware)
      .forRoutes('*')
}
}



// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { TypeOrmModule } from '@nestjs/typeorm';
// // import { LocationModule } from './location/location.module';
// // import { Location } from './location/entities/location.entity';
// // import { UserModule } from './user/user.module';
// // import { User } from './user/entities/user.entity';
// import { Leader } from './leader/entities/leader.entity';
// import { Country } from './country/entities/country.entity';
// import { LeaderModule } from './leader/leader.module';
// import { CountryModule } from './country/country.module';
// import { EmployeeModule } from './employee/employee.module';




// @Module({
//   imports: [
//     TypeOrmModule.forRoot({
//       type: 'mysql',
//       host: 'localhost',
//       port: 3306,
//       username: 'root',
//       password: 'Atharva@123',
//       database: 'connection',
//       entities: [Leader,Country],
//       synchronize: true,
//     }),
//     LeaderModule,
//     CountryModule,
//   ],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}
