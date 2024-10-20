import { Module } from '@nestjs/common';
import { ProductTypeService } from './product_type.service';
import { ProductTypeController } from './product_type.controller';
import { ProductType } from './entities/product_type.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Production } from '../production/entities/production.entity';
import { ProductionModule } from '../production/production.module';

@Module({
  imports: [TypeOrmModule.forFeature([ProductType])],
  controllers: [ProductTypeController],
  providers: [ProductTypeService],
})
export class ProductTypeModule {}
