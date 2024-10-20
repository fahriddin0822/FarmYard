import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateProductTypeDto {

    @Field()
    name: string;
}