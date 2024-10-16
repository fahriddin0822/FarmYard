import { Module } from '@nestjs/common';
import { WorkersWorkerRoleService } from './workers_worker_role.service';
import { WorkersWorkerRoleController } from './workers_worker_role.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkersWorkerRole } from './entities/workers_worker_role.entity';

@Module({
  imports:[TypeOrmModule.forFeature([WorkersWorkerRole])],
  controllers: [WorkersWorkerRoleController],
  providers: [WorkersWorkerRoleService],
  exports:[WorkersWorkerRoleService]
})
export class WorkersWorkerRoleModule {}
