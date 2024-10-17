import { Field, InputType } from "@nestjs/graphql";
import { IsString, IsOptional, IsNumber } from 'class-validator';

@InputType()
export class UpdateWorkerDto{
    @IsOptional()
    @IsString()
    @Field(() => String, { nullable: true })  // Ensure each field is decorated with @Field()
    name?: string;
  
    @IsOptional()
    @IsString()
    @Field(() => String, { nullable: true })
    phone_number?: string;
  
    @IsOptional()
    @IsNumber()
    @Field(() => Number, { nullable: true })
    experience?: number;
  
    @IsOptional()
    @IsNumber()
    @Field(() => Number, { nullable: true })
    salary?: number;
}
