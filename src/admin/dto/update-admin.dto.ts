import { Field, InputType } from "@nestjs/graphql";

@InputType()  // Input type for GraphQL mutations
export class UpdateAdminDto {
  
  @Field({ nullable: true })  // Nullable field for updates
  username?: string;

  @Field({ nullable: true })  // Nullable field for updates
  password?: string;

  @Field({ nullable: true })  // Nullable field for updates
  email?: string;
}
