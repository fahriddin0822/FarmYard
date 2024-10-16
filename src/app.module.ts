import { Module } from '@nestjs/common';
import { AdminModule } from './admin/admin.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Admin } from './admin/entities/admin.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkersModule } from './workers/workers.module';
import { WorkerRoleModule } from './worker_role/worker_role.module';
import { WorkersWorkerRoleModule } from './workers_worker_role/workers_worker_role.module';
import * as mysql2 from 'mysql2';
import { Worker } from './workers/entities/worker.entity';
import { WorkerRole } from './worker_role/entities/worker_role.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      password: "3306",
      username: "root",
      database: "farmyard",
      entities: [Admin, Worker, WorkerRole],
      synchronize: true,
      driver: 'mysql2',
      retryAttempts:3
    }),
    AdminModule,
    WorkersModule,
    WorkerRoleModule,
    WorkersWorkerRoleModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
