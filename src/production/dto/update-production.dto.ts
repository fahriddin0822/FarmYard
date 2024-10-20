import { PartialType } from '@nestjs/swagger';
import { CreateProductionDto } from './create-production.dto';
import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateProductionDto extends PartialType(CreateProductionDto) {
    @IsOptional()
    @IsString()
    @Field(() => String, { nullable: true })
    animal_id: string;

    @IsOptional()
    @IsString()
    @Field(() => String, { nullable: true })
    production_date: string;

    @IsOptional()
    @IsString()
    @Field(() => Number, { nullable: true })
    cost_sold: number;

    @IsOptional()
    @IsString()
    @Field(() => Number, { nullable: true })
    product_type: number;


    @IsOptional()
    @IsString()
    @Field(() => Number, { nullable: true })
    total_profit: number;
}
