import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Animal } from "../../animals/entities/animal.entity";

@ObjectType()  // Changed to ObjectType for GraphQL output
@Entity()  // TypeORM Entity decorator
export class AnimalCondition {
    @PrimaryGeneratedColumn()
    @Field(() => ID)  // Explicit ID field for GraphQL
    id: number;

    @Field()
    @Column()
    name: number;

    @Field()
    @Column()
    definition: string;

    @ManyToMany(() => Animal, animal => animal.condition)
    @JoinTable()
    @Field(() => [Animal], { nullable: true })  
    animals: Animal[];

}
