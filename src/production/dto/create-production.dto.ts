import { Field, InputType } from "@nestjs/graphql";
@InputType()
export class CreateProductionDto {
    @Field()
    animal_id: string;
    @Field()
    production_date: string;
    @Field()
    cost_sold: number;
    @Field()
    total_profit: number;
    @Field()
    product_type: number;

    @Field(() => [Number], { nullable: true })
    productTypeIds: number[];

}
