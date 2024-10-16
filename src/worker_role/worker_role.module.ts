import { Module } from '@nestjs/common';
import { WorkerRoleService } from './worker_role.service';
import { WorkerRoleController } from './worker_role.controller';

@Module({
  controllers: [WorkerRoleController],
  providers: [WorkerRoleService],
})
export class WorkerRoleModule {}
