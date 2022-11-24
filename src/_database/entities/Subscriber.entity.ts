import { nowInMillis } from '../../shared/Utils';
import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('subscriber')
export class Subscriber {
    @PrimaryGeneratedColumn({name: 'id', type: 'int'})
    public id: number;

    @Column({ name: 'email', type: 'varchar', nullable: false })
    public email: string;

    @Column({ name: 'key', type: 'varchar', nullable: false })
    public key: string;

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