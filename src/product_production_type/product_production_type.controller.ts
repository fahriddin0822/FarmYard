import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductProductionTypeService } from './product_production_type.service';
import { CreateProductProductionTypeDto } from './dto/create-product_production_type.dto';
import { UpdateProductProductionTypeDto } from './dto/update-product_production_type.dto';

@Controller('product-production-type')
export class ProductProductionTypeController {
  constructor(private readonly productProductionTypeService: ProductProductionTypeService) {}

  @Post()
  create(@Body() createProductProductionTypeDto: CreateProductProductionTypeDto) {
    return this.productProductionTypeService.create(createProductProductionTypeDto);
  }

  @Get()
  findAll() {
    return this.productProductionTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productProductionTypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductProductionTypeDto: UpdateProductProductionTypeDto) {
    return this.productProductionTypeService.update(+id, updateProductProductionTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productProductionTypeService.remove(+id);
  }
}
