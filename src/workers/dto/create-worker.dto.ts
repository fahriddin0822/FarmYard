import { InputType, Field } from '@nestjs/graphql';
import { IsString, IsNumber, IsOptional, IsArray, ArrayNotEmpty } from 'class-validator';

@InputType()
export class CreateWorkerDto {
  
  @IsString()
  @Field(() => String)
  name: string;

  @IsString()
  @Field(() => String)
  phone_number: string;

  @IsNumber()
  @Field(() => Number)
  experience: number;

  @IsNumber()
  @Field(() => Number)
  salary: number;

  // Add roleIds as an array of numbers
  @IsArray()
  @ArrayNotEmpty()
  @Field(() => [Number])  // Ensure it's typed as an array of numbers in GraphQL
  roleIds: number[];  // This is for the worker's role IDs
}
