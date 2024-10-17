import { Module } from '@nestjs/common';
import { AdminModule } from './admin/admin.module';
import { Admin } from './admin/entities/admin.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkersModule } from './workers/workers.module';
import { WorkerRoleModule } from './worker_role/worker_role.module';
import { WorkersWorkerRoleModule } from './workers_worker_role/workers_worker_role.module';
import { Workers } from './workers/entities/worker.entity';
import { WorkerRole } from './worker_role/entities/worker_role.entity';
import { WorkersWorkerRole } from './workers_worker_role/entities/workers_worker_role.entity';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Schema } from '@nestjs/mongoose';

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
      username: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || '5432',
      database: process.env.DB_NAME || 'farmyard',
      entities: [
        Admin,
        Workers,
        WorkerRole,
      ],
      synchronize: true,
      retryAttempts:3
    }),
    TypeOrmModule.forFeature([Admin, WorkerRole, Workers, WorkersWorkerRole]),
    AdminModule,
    WorkersModule,
    WorkerRoleModule,
    WorkersWorkerRoleModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
