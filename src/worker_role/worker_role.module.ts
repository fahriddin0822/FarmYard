import { Module } from '@nestjs/common';
import { WorkerRoleService } from './worker_role.service';
import { WorkerRoleController } from './worker_role.controller';
import { WorkerRole } from './entities/worker_role.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkerRoleResolver } from './worker_role.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([WorkerRole])],
  controllers: [WorkerRoleController],
  providers: [WorkerRoleService, WorkerRoleResolver],
  exports: [WorkerRoleService],
})
export class WorkerRoleModule {}