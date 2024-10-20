import { Module } from '@nestjs/common';
import { AdminModule } from './admin/admin.module';
import { Admin } from './admin/entities/admin.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkersModule } from './workers/workers.module';
import { WorkerRoleModule } from './worker_role/worker_role.module';
import { Workers } from './workers/entities/worker.entity';
import { WorkerRole } from './worker_role/entities/worker_role.entity';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Schema } from '@nestjs/mongoose';
import { AnimalsModule } from './animals/animals.module';
import { VaccinationHystoryModule } from './vaccination_hystory/vaccination_hystory.module';
import { VaccinationModule } from './vaccination/vaccination.module';
import { ProductionModule } from './production/production.module';
import { ProductTypeModule } from './product_type/product_type.module';
import { ProductProductionTypeModule } from './product_production_type/product_production_type.module';
import { FeedingSchedulesModule } from './feeding_schedules/feeding_schedules.module';
import { FoodsModule } from './foods/foods.module';
import { IllnessHystoryModule } from './illness_hystory/illness_hystory.module';
import { IllnessTypeModule } from './illness_type/illness_type.module';
import { SpeciesModule } from './species/species.module';
import { BreedsModule } from './breeds/breeds.module';
import { AnimalConditionModule } from './animal_condition/animal_condition.module';
import * as dotenv from 'dotenv'
import { Production } from './production/entities/production.entity';
import { ProductType } from './product_type/entities/product_type.entity';
dotenv.config()

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver:ApolloDriver,
      autoSchemaFile:"schema.gql",
      sortSchema:true,
      playground:true
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD ,
      database: process.env.DB_NAME,
      entities: [
        Admin,
        Workers,
        WorkerRole,
        ProductType, 
        Production
      ],
      synchronize: true,
      retryAttempts:3
    }),
    TypeOrmModule.forFeature([Admin, WorkerRole, Workers, Production, ProductType]),
    AdminModule,
    WorkersModule,
    WorkerRoleModule,
    AnimalsModule,
    VaccinationHystoryModule,
    VaccinationModule,
    ProductionModule,
    ProductTypeModule,
    ProductProductionTypeModule,
    FeedingSchedulesModule,
    FoodsModule,
    IllnessHystoryModule,
    IllnessTypeModule,
    SpeciesModule,
    BreedsModule,
    AnimalConditionModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
