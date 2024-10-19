import { Injectable } from '@nestjs/common';
import { CreateProductProductionTypeDto } from './dto/create-product_production_type.dto';
import { UpdateProductProductionTypeDto } from './dto/update-product_production_type.dto';

@Injectable()
export class ProductProductionTypeService {
  create(createProductProductionTypeDto: CreateProductProductionTypeDto) {
    return 'This action adds a new productProductionType';
  }

  findAll() {
    return `This action returns all productProductionType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productProductionType`;
  }

  update(id: number, updateProductProductionTypeDto: UpdateProductProductionTypeDto) {
    return `This action updates a #${id} productProductionType`;
  }

  remove(id: number) {
    return `This action removes a #${id} productProductionType`;
  }
}
