import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Field, ObjectType } from "@nestjs/graphql";
import { WorkerRole } from "../../worker_role/entities/worker_role.entity";
import { ProductType } from "../../product_type/entities/product_type.entity";

@ObjectType()
@Entity()
export class Production {
    @PrimaryGeneratedColumn()
    @Field(() => Number)
    id: number;

    @Column()
    @Field(() => String)
    animal_id: string;

    @Column()
    @Field(() => String)
    production_date: string;

    @Column()
    @Field(() => Number)
    cost_sold: number;

    @Column({ default: 0 })
    @Field(() => Number)
    total_profit: number;


    @ManyToMany(() => ProductType, productType => productType.products, { cascade: true })
    @JoinTable()  // The owning side uses @JoinTable()
    @Field(() => [ProductType], { nullable: true })
    productTypes: ProductType[];
}
