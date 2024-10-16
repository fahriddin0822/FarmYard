import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { WorkerRole } from "../../worker_role/entities/worker_role.entity";

@Entity()
export class Workers {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    phone_number: string;

    @Column()
    experience: number;

    @Column()
    salary: number;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    hired_date: Date;

    @Column({ type: 'timestamp', nullable: true })
    fired_date: Date;

    @ManyToMany(() => WorkerRole, workerRole => workerRole.workers)
    @JoinTable({
        name: 'workers_worker_role', // Name of the join table
        joinColumn: {
            name: 'worker_id',
            referencedColumnName: 'id',
        },
        inverseJoinColumn: {
            name: 'role_id',
            referencedColumnName: 'id',
        }
    })
    workerRoles: WorkerRole[];
}
