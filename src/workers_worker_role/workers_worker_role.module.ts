import { Module } from '@nestjs/common';
import { WorkersWorkerRoleService } from './workers_worker_role.service';
import { WorkersWorkerRoleController } from './workers_worker_role.controller';

@Module({
  controllers: [WorkersWorkerRoleController],
  providers: [WorkersWorkerRoleService],
})
export class WorkersWorkerRoleModule {}
