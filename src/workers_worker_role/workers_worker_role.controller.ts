import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WorkersWorkerRoleService } from './workers_worker_role.service';
import { CreateWorkersWorkerRoleDto } from './dto/create-workers_worker_role.dto';
import { UpdateWorkersWorkerRoleDto } from './dto/update-workers_worker_role.dto';

@Controller('workers-worker-role')
export class WorkersWorkerRoleController {
  constructor(private readonly workersWorkerRoleService: WorkersWorkerRoleService) {}

  @Post()
  create(@Body() createWorkersWorkerRoleDto: CreateWorkersWorkerRoleDto) {
    return this.workersWorkerRoleService.create(createWorkersWorkerRoleDto);
  }

  @Get()
  findAll() {
    return this.workersWorkerRoleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workersWorkerRoleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWorkersWorkerRoleDto: UpdateWorkersWorkerRoleDto) {
    return this.workersWorkerRoleService.update(+id, updateWorkersWorkerRoleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workersWorkerRoleService.remove(+id);
  }
}
