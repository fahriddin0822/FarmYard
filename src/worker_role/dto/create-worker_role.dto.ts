import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateWorkerRoleDto {

    @Field()
    name: string;

    @Field()
    description: string;
}