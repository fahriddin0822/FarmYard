import { Field, ObjectType, ID } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()  // Changed to ObjectType for GraphQL output
@Entity()  // TypeORM Entity decorator
export class Admin {
  @PrimaryGeneratedColumn()
  @Field(() => ID)  // Explicit ID field for GraphQL
  id: number;

  @Field()  // GraphQL field decorator
  @Column()
  username: string;

  @Field()  // GraphQL field decorator
  @Column()
  password: string;

  @Field({ nullable: true })  // Nullable field for GraphQL
  @Column({ nullable: true })
  email: string;

  @Field()  // GraphQL field decorator
  @Column({ default: true })
  isActive: boolean;

  @Field()  // GraphQL field decorator
  @Column({ default: false })
  isCreator: boolean;
}
