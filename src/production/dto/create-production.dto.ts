import { Field, InputType } from "@nestjs/graphql";
@InputType()
export class CreateProductionDto {
    @Field({ nullable: true })
    animal_id: string;

    @Field()
    production_date: string;

    @Field()
    cost_sold: number;

    @Field({ defaultValue: 0 })
    total_profit: number;

    // This will hold the IDs of the product types to associate with the production
    @Field(() => [Number], { nullable: false })
    productTypeIds: number[];
}

