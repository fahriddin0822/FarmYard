import { Injectable } from '@nestjs/common';
import { CreateWorkersWorkerRoleDto } from './dto/create-workers_worker_role.dto';
import { UpdateWorkersWorkerRoleDto } from './dto/update-workers_worker_role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { WorkersWorkerRole } from './entities/workers_worker_role.entity';
import { Repository } from 'typeorm';

@Injectable()
export class WorkersWorkerRoleService {
  constructor(@InjectRepository(WorkersWorkerRole) private readonly workersWorkereRoleRepo: Repository<WorkersWorkerRole>,){}
  create(createWorkersWorkerRoleDto: CreateWorkersWorkerRoleDto) {
    return this.workersWorkereRoleRepo.save(createWorkersWorkerRoleDto);
  }

  findAll() {
    return this.workersWorkereRoleRepo.find();
  }

  findOne(id: number) {
    return this.workersWorkereRoleRepo.findOne({ where: { id } });
  }

  update(id: number, updateWorkerDto: UpdateWorkersWorkerRoleDto) {
    return this.workersWorkereRoleRepo.update(id, updateWorkerDto);
  }

  remove(id: number) {
    return this.workersWorkereRoleRepo.delete(id);
  }
}
