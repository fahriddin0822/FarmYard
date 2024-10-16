import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { WorkerRole } from "../../worker_role/entities/worker_role.entity";
import { Workers } from "../../workers/entities/worker.entity";

@Entity()
export class WorkersWorkerRole {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    worker_id:number;

    @Column()
    worker_role_id:number;

    @ManyToOne(() => Workers, worker => worker.workerRoles)
    @JoinColumn({ name: 'worker_id' })
    worker: Workers;
  
    @ManyToOne(() => WorkerRole, workerRole => workerRole.workers)
    @JoinColumn({ name: 'role_id' })
    role: WorkerRole;
}
