import { PartialType } from '@nestjs/swagger';
import { CreateProductTypeDto } from './create-product_type.dto';
import { IsOptional, IsString } from 'class-validator';
import { Field } from '@nestjs/graphql';

export class UpdateProductTypeDto {
    @IsOptional()
    @IsString()
    @Field(() => String, { nullable: true })  // Define the GraphQL field with type
    name?: string;
}
