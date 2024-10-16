import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Admin {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ unique: true })
    fullname: string;

    @Column()
    email: string;

    @Column()
    phone_number: string;

    @Column()
    tg_link: string;

    @Column()
    hashed_password: string;

    @Column()
    hashed_refresh_token: string;

    @Column({default: false})
    is_active: boolean;

    @Column({default: false})
    is_creator: string;
}
