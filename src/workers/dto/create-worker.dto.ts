import { InputType, Field } from '@nestjs/graphql';
import { IsString, IsNumber, IsOptional } from 'class-validator';

@InputType()  // Ensure the class is decorated with @InputType()
export class CreateWorkerDto {
  
  @IsString()
  @Field(() => String)  // Ensure each field is decorated with @Field()
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
}
