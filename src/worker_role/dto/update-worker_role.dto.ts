import { InputType, Field } from '@nestjs/graphql';
import { IsString, IsOptional } from 'class-validator';

@InputType()  // Add this decorator to mark it as an input type for GraphQL
export class UpdateWorkerRoleDto {
  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })  // Define the GraphQL field with type
  name?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })  // Define the GraphQL field with type
  description?: string;
}
