import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateProductionDto } from './dto/create-production.dto';
import { UpdateProductionDto } from './dto/update-production.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Production } from './entities/production.entity';
import { Repository } from 'typeorm';
import { ProductType } from '../product_type/entities/product_type.entity';

@Injectable()
export class ProductionService {
  constructor(
    @InjectRepository(Production) private readonly productionRepo: Repository<Production>,
    @InjectRepository(ProductType) private readonly productTypeRepo: Repository<ProductType>
  ) { }

  async create(createProductionDto: CreateProductionDto) {
    const { production_date, cost_sold, total_profit, productTypeIds } = createProductionDto;

    // Fetch product types based on the IDs passed
    const productTypes = await this.productTypeRepo.findByIds(productTypeIds);

    // If some product types are invalid, you can throw an exception
    if (productTypes.length !== productTypeIds.length) {
        throw new BadRequestException('One or more product types are invalid');
    }

    // Save the production and associate it with the fetched product types
    return this.productionRepo.save({
        production_date,
        cost_sold,
        total_profit,
        productTypes,  // Associate the product types here
    });
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
