import { Injectable } from '@nestjs/common';
import { CreateProductTypeDto } from './dto/create-product_type.dto';
import { UpdateProductTypeDto } from './dto/update-product_type.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductType } from './entities/product_type.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductTypeService {
  constructor(
    @InjectRepository(ProductType) private readonly productTypeRepo: Repository<ProductType>,
  ) { }
  create(createProductTypeDto: CreateProductTypeDto) {
    return this.productTypeRepo.save(createProductTypeDto);
  }

  findAll() {
    return this.productTypeRepo.find({ relations: ['products'] });
  }

  findOne(id: number) {
    return this.productTypeRepo.findOne({ where: { id } });
  }

  update(id: number, updateProductTypeDto: UpdateProductTypeDto) {
    return this.productTypeRepo.update(id, updateProductTypeDto);
  }

  remove(id: number) {
    return this.productTypeRepo.delete(id);
  }
}
