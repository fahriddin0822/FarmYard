import { Injectable } from '@nestjs/common';
import { CreateWorkerRoleDto } from './dto/create-worker_role.dto';
import { UpdateWorkerRoleDto } from './dto/update-worker_role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { WorkerRole } from './entities/worker_role.entity';
import { Repository } from 'typeorm';

@Injectable()
export class WorkerRoleService {
  constructor(
    @InjectRepository(WorkerRole) private readonly workerRoleRepo: Repository<WorkerRole>,
  ) { }
  create(createWorkerRoleDto: CreateWorkerRoleDto) {
    return this.workerRoleRepo.save(createWorkerRoleDto);
  }

  findAll() {
    return this.workerRoleRepo.find();
  }

  findOne(id: number) {
    return this.workerRoleRepo.findOne({ where: { id } });
  }

  update(id: number, updateWorkerRoleDto: UpdateWorkerRoleDto) {
    return this.workerRoleRepo.update(id, updateWorkerRoleDto);
  }

  remove(id: number) {
    return this.workerRoleRepo.delete(id);
  }
}
