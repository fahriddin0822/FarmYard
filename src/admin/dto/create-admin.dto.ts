import { Field, InputType } from "@nestjs/graphql";

@InputType()  // Input type for GraphQL mutations
export class CreateAdminDto {

  @Field()  // GraphQL field decorator
  username: string;

  @Field()  // GraphQL field decorator
  password: string;

  @Field()  // GraphQL field decorator
  email: string;
}
