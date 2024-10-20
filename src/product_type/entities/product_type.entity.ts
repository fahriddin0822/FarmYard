import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Workers } from "../../workers/entities/worker.entity"; // Ensure the correct import path
import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Production } from "../../production/entities/production.entity";

@ObjectType()
@Entity()
export class ProductType {
    @PrimaryGeneratedColumn()
    @Field(() => ID)  // Explicit type for GraphQL
    id: number;

    @Column()
    @Field(() => String)  // Explicit type for GraphQL
    name: string;

    @Field(() => [Production], { nullable: true })  // Explicit type for the workers array
    @ManyToMany(() => Production, product => product.productTypes)
    products: Production[];
}