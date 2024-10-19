import { Module } from '@nestjs/common';
import { ProductProductionTypeService } from './product_production_type.service';
import { ProductProductionTypeController } from './product_production_type.controller';

@Module({
  controllers: [ProductProductionTypeController],
  providers: [ProductProductionTypeService],
})
export class ProductProductionTypeModule {}
