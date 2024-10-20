import { Field, ObjectType } from "@nestjs/graphql";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { AnimalCondition } from "../../animal_condition/entities/animal_condition.entity";

@ObjectType()
@Entity()
export class Animal {
    @PrimaryGeneratedColumn()
    @Field(() => Number)
    id: number;

    @Column()
    @Field()
    name: string;

    @Column()
    @Field()
    species_id: number;

    @Column()
    @Field()
    breed_id: number;

    @Column()
    @Field()
    date_of_birth: Date;

    @Column()
    @Field()
    condition: number;

    @Column()
    @Field()
    const_sold: number;

    @Column()
    @Field()
    cost_purchased: number;

    @Column()
    @Field()
    parent_id: number;

    @Column()
    @Field()
    worker_id: number;

    @ManyToMany(() => AnimalCondition, workerCondition => workerCondition.animals, { cascade: true })
    @JoinTable()  // The owning side uses @JoinTable()
    @Field(() => [AnimalCondition], { nullable: true })
    animalConditions: AnimalCondition[];
}
