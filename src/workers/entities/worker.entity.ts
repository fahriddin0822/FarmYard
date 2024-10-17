import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Field, ObjectType } from "@nestjs/graphql";
import { WorkerRole } from "../../worker_role/entities/worker_role.entity";

@ObjectType()
@Entity()
export class Workers {
  @PrimaryGeneratedColumn()
  @Field(() => Number)
  id: number;

  @Column()
  @Field(() => String)
  name: string;

  @Column()
  @Field(() => String)
  phone_number: string;

  @ManyToMany(() => WorkerRole, workerRole => workerRole.workers, { cascade: true })
  @JoinTable()  // The owning side uses @JoinTable()
  @Field(() => [WorkerRole], { nullable: true })
  workerRoles: WorkerRole[];
}
