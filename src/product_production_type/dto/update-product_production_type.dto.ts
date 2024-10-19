import { PartialType } from '@nestjs/swagger';
import { CreateProductProductionTypeDto } from './create-product_production_type.dto';

export class UpdateProductProductionTypeDto extends PartialType(CreateProductProductionTypeDto) {}
