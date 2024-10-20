import { Field, ObjectType, ID } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()  // Changed to ObjectType for GraphQL output
@Entity()  // TypeORM Entity decorator
export class Admin {
  @PrimaryGeneratedColumn()
  @Field(() => ID)  // Explicit ID field for GraphQL
  id: number;

  @Field()
  @Column()
  username: string; 

  @Field()
  @Column()
  password: string;

  @Field({ nullable: true })  // Nullable field for GraphQL
  @Column({ nullable: true })
  email: string;

  @Field()
  @Column({ default: true })
  isActive: boolean;

  @Field()
  @Column({ default: false })
  isCreator: boolean;
}
