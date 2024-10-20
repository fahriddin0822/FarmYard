import { Module } from '@nestjs/common';
import { ProductionService } from './production.service';
import { ProductionController } from './production.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Production } from './entities/production.entity';
import { ProductType } from '../product_type/entities/product_type.entity';
import { ProductTypeModule } from '../product_type/product_type.module';

@Module({
  imports: [TypeOrmModule.forFeature([Production, ProductType]), ProductTypeModule],
  controllers: [ProductionController],
  providers: [ProductionService],
})
export class ProductionModule {}
