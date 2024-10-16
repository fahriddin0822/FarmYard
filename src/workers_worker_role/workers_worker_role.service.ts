import { Injectable } from '@nestjs/common';
import { CreateWorkersWorkerRoleDto } from './dto/create-workers_worker_role.dto';
import { UpdateWorkersWorkerRoleDto } from './dto/update-workers_worker_role.dto';

@Injectable()
export class WorkersWorkerRoleService {
  create(createWorkersWorkerRoleDto: CreateWorkersWorkerRoleDto) {
    return 'This action adds a new workersWorkerRole';
  }

  findAll() {
    return `This action returns all workersWorkerRole`;
  }

  findOne(id: number) {
    return `This action returns a #${id} workersWorkerRole`;
  }

  update(id: number, updateWorkersWorkerRoleDto: UpdateWorkersWorkerRoleDto) {
    return `This action updates a #${id} workersWorkerRole`;
  }

  remove(id: number) {
    return `This action removes a #${id} workersWorkerRole`;
  }
}
