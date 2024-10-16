import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Workers } from "../../workers/entities/worker.entity"; // Ensure the correct import path

@Entity()
export class WorkerRole {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @ManyToMany(() => Workers, worker => worker.workerRoles)
    workers: Workers[];
}
