import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateProductionDto } from './dto/create-production.dto';
import { UpdateProductionDto } from './dto/update-production.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Production } from './entities/production.entity';
import { In, Repository } from 'typeorm';
import { ProductType } from '../product_type/entities/product_type.entity';

@Injectable()
export class ProductionService {
  constructor(
    @InjectRepository(Production) private readonly productionRepo: Repository<Production>,
    @InjectRepository(ProductType) private readonly productTypeRepo: Repository<ProductType>
  ) { }

  async create(createProductionDto: CreateProductionDto) {
    const {
      animal_id,
      production_date,
      cost_sold,
      total_profit = 0, // Ensure a default value if not provided
      productTypeIds,
    } = createProductionDto;
  
    // Fetch product types based on the IDs passed
    const productTypes = await this.productTypeRepo.findBy({
      id: In(productTypeIds),
    });
  
    // If some product types are invalid, throw an exception
    if (productTypes.length !== productTypeIds.length) {
      throw new BadRequestException('One or more product types are invalid');
    }
  
    // Create a new production instance
    const production = this.productionRepo.create({
      animal_id,
      production_date,
      cost_sold,
      total_profit,
      productTypes,
    });
  
    // Save the production
    return this.productionRepo.save(production);
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
