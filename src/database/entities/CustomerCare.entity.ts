import { Entity, PrimaryColumn, Column, BeforeInsert, BeforeUpdate, Index, PrimaryGeneratedColumn } from 'typeorm';
import { nowInMillis } from '../../shared/Utils';

@Entity('customer_care')
export class CustomerCare {
    @PrimaryGeneratedColumn({ name: 'id', type: 'int'})
    public id: number;

    @Column({ name: 'first_name', type: 'varchar', length: 150})
    public firstName: string;

    @Column({ name: 'last_name', type: 'varchar', length: 150})
    public lastName: string;


    @Column({ name: 'email', type: 'varchar', length: 150})
    public email: string;


    @Column({ name: 'subject', type: 'text', nullable: true })
    public subject: string;

    @Column({ name: 'message', type: 'text', nullable: true })
    public message: string;

    @Column({ name: 'received_time',  type: 'bigint', nullable: true })
    public receivedTime: number;


    @Column({ name: 'status', type: 'int', nullable: true, default: 0 })
    public status: number;

    @Column({ name: 'created_at', type: 'bigint', nullable: true })
    public createdAt: number;

    @Column({ name: 'updated_at', type: 'bigint', nullable: true })
    public updatedAt: number;

    @BeforeInsert()
    public updateCreateDates() {
        this.createdAt = nowInMillis();
        this.updatedAt = nowInMillis();
    }

    @BeforeUpdate()
    public updateUpdateDates() {
        this.updatedAt = nowInMillis();
    }

}
