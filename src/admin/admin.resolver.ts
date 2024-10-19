import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Admin } from './entities/admin.entity';

@Resolver('admin')
export class AdminResoler {
  constructor(private readonly adminService: AdminService) {}

  @Mutation(()=>Admin)
  create(@Args("createAdmin") createAdminDto: CreateAdminDto) {
    return this.adminService.create(createAdminDto);
  }

  @Query(()=>[Admin])
  findAll() {
    return this.adminService.findAll();
  }

  @Query(()=>Admin)
  findOne(@Args('id', { type: () => ID}) id: number) {
    return this.adminService.findOne(id);
  }

  @Mutation(() => Admin)
  update(@Args('id', { type: () => ID}) id: number, @Args('updateAdmin') updateAdminDto: UpdateAdminDto) {
    return this.adminService.update(+id, updateAdminDto);
  }

  @Mutation(()=> ID)
  remove(@Args('id', { type: () => ID}) id: number) {
    return this.adminService.remove(+id);
  }
}
