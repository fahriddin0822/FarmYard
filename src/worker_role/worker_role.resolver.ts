import { Controller, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WorkerRoleService } from './worker_role.service';
import { CreateWorkerRoleDto } from './dto/create-worker_role.dto';
import { UpdateWorkerRoleDto } from './dto/update-worker_role.dto';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql'
import { WorkerRole } from './entities/worker_role.entity';

@Resolver('worker-role')
export class WorkerRoleResolver {
  constructor(private readonly workerRoleService: WorkerRoleService) { }

  @Mutation(() => WorkerRole)
  createWorkerRole(@Args("createWorkerRole") createWorkerRoleDto: CreateWorkerRoleDto) {
    return this.workerRoleService.create(createWorkerRoleDto);
  }

  @Query(() => [WorkerRole])
  findAllWorkerRole() {
    return this.workerRoleService.findAll();
  }

  @Query(() => WorkerRole)
  findOneWorkerRole(@Args('id', { type: () => ID }) id: number) {
    return this.workerRoleService.findOne(id);
  }

  @Mutation(() => WorkerRole)
  updateWorkerRole(@Args('id', { type: () => ID }) id: number, @Args("updateWorkerRole") updateWorkerRoleDto: UpdateWorkerRoleDto) {
    return this.workerRoleService.update(id, updateWorkerRoleDto);
  }

  @Mutation(() => ID)
  removeWorkerRole(@Args('id', { type: () => ID }) id: number) {
    return this.workerRoleService.remove(id);
  }
}