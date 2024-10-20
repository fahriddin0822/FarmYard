import { Module } from '@nestjs/common';
import { WorkersService } from './workers.service';
import { WorkersController } from './workers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Workers } from './entities/worker.entity';
import { WorkerRoleModule } from '../worker_role/worker_role.module';
import { WorkerRole } from '../worker_role/entities/worker_role.entity';
import { WorkersResolver } from './workers.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Workers, WorkerRole]), WorkerRoleModule],
  controllers: [WorkersController],
  providers: [WorkersService, WorkersResolver],
  exports: [WorkersService]
})
export class WorkersModule { }