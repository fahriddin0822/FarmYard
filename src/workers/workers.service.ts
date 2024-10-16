import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateWorkerDto } from './dto/create-worker.dto';
import { UpdateWorkerDto } from './dto/update-worker.dto';
import { Workers } from './entities/worker.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { WorkerRole } from '../worker_role/entities/worker_role.entity';

@Injectable()
export class WorkersService {
  constructor(
    @InjectRepository(Workers) private readonly workerRepo: Repository<Workers>,
    @InjectRepository(WorkerRole) private readonly workerRoleRepository: Repository<WorkerRole>
  ) { }

  async create(createWorkerDto: CreateWorkerDto) {

    const { name, phone_number, experience, salary, roleIds } = createWorkerDto;

    const roles = await this.workerRoleRepository.findByIds(roleIds);

    if (roles.length !== roleIds.length) {
      throw new BadRequestException('One or more roles are invalid');
    }
    const worker = this.workerRepo.create({
      name,
      phone_number,
      experience,
      salary,
      workerRoles: roles, // Set the roles here
    });

    return this.workerRepo.save(worker);
  }

  findAll() {
    return this.workerRepo.find({relations:["workerRoles"]});
  }

  findOne(id: number) {
    return this.workerRepo.findOne({ where: { id } });
  }

  update(id: number, updateWorkerDto: UpdateWorkerDto) {
    return this.workerRepo.update(id, updateWorkerDto);
  }

  remove(id: number) {
    return this.workerRepo.delete(id);
  }
}
