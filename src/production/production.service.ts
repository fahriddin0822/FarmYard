import { Injectable } from '@nestjs/common';
import { CreateProductionDto } from './dto/create-production.dto';
import { UpdateProductionDto } from './dto/update-production.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Production } from './entities/production.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductionService {
  constructor(
    @InjectRepository(Production) private readonly productionRepo: Repository<Production>,
  ) { }

  create(createProductionDto: CreateProductionDto) {
    return this.productionRepo.save(createProductionDto);
  }

  findAll() {
    return this.productionRepo.find({ relations: ['productTypes'] });
  }

  findOne(id: number) {
    return this.productionRepo.findOne({ where: { id }, relations: ['productTypes'] });
  }

  update(id: number, updateProductionDto: UpdateProductionDto) {
    return this.productionRepo.update(id, updateProductionDto);
  }

  remove(id: number) {
    return this.productionRepo.delete(id);
  }
}
