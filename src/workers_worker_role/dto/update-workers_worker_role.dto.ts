import { PartialType } from '@nestjs/mapped-types';
import { CreateWorkersWorkerRoleDto } from './create-workers_worker_role.dto';

export class UpdateWorkersWorkerRoleDto extends PartialType(CreateWorkersWorkerRoleDto) {}
