import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Workers } from "../../workers/entities/worker.entity"; // Ensure the correct import path
import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
@Entity()
export class WorkerRole {
    @PrimaryGeneratedColumn()
  @Field(() => ID)  // Explicit type for GraphQL
  id: number;

  @Column()
  @Field(() => String)  // Explicit type for GraphQL
  name: string;

  @Column()
  @Field(() => String)  // Explicit type for GraphQL
  description: string;

  @ManyToMany(() => Workers, worker => worker.workerRoles)
  @JoinTable()
  @Field(() => [Workers], { nullable: true })  // Explicit type for the workers array
  workers: Workers[];
}