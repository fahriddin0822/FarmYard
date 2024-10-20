import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WorkerRoleService } from './worker_role.service';
import { CreateWorkerRoleDto } from './dto/create-worker_role.dto';
import { UpdateWorkerRoleDto } from './dto/update-worker_role.dto';

@Controller('worker-role')
export class WorkerRoleController {
  constructor(private readonly workerRoleService: WorkerRoleService) {}

  @Post()
  create(@Body() createWorkerRoleDto: CreateWorkerRoleDto) {
    return this.workerRoleService.create(createWorkerRoleDto);
  }

  @Get()
  findAll() {
    return this.workerRoleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workerRoleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWorkerRoleDto: UpdateWorkerRoleDto) {
    return this.workerRoleService.update(+id, updateWorkerRoleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workerRoleService.remove(+id);
  }
}