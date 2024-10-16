import { Injectable } from '@nestjs/common';
import { CreateWorkerRoleDto } from './dto/create-worker_role.dto';
import { UpdateWorkerRoleDto } from './dto/update-worker_role.dto';

@Injectable()
export class WorkerRoleService {
  create(createWorkerRoleDto: CreateWorkerRoleDto) {
    return 'This action adds a new workerRole';
  }

  findAll() {
    return `This action returns all workerRole`;
  }

  findOne(id: number) {
    return `This action returns a #${id} workerRole`;
  }

  update(id: number, updateWorkerRoleDto: UpdateWorkerRoleDto) {
    return `This action updates a #${id} workerRole`;
  }

  remove(id: number) {
    return `This action removes a #${id} workerRole`;
  }
}
