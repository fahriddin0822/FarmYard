import { Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin } from './entities/admin.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin) private readonly adminRepo: Repository<Admin>,
  ) { }

  async create(createAdminDto: CreateAdminDto) {
    const newAdmin = await this.adminRepo.create(createAdminDto);
    return this.adminRepo.save(newAdmin);
  }

  createAdmin(createAdminDto: CreateAdminDto) {
    const newAdmin = this.adminRepo.create(createAdminDto);
    return this.adminRepo.save(newAdmin);
  }

  findAll() {
    return this.adminRepo.find();
  }

  async findByUsername(username: string): Promise<Admin | undefined> {
    return this.adminRepo.findOne({ where: { username } });
  }

  findOne(id: number) {
    return this.adminRepo.findOneBy({ id });
  }

  update(id: number, updateAdminDto: UpdateAdminDto) {
    return this.adminRepo.update(id, updateAdminDto);
  }

  remove(id: number) {
    return this.adminRepo.delete(id);
  }

}
