import { Field, InputType } from '@nestjs/graphql';
import { IsString, IsOptional, IsNumber, IsArray } from 'class-validator';

@InputType()
export class CreateProductionDto {
  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  animal_id: string;

  @Field()
  @IsString()
  production_date: string;

  @Field()
  @IsNumber()
  cost_sold: number;

  @Field({ defaultValue: 0 })
  @IsOptional()
  @IsNumber()
  total_profit: number;

  @Field(() => [Number], { nullable: false })
  @IsArray()
  @IsNumber({}, { each: true })
  productTypeIds: number[];
}
