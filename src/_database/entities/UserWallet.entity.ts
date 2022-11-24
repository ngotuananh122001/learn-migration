import { Entity, PrimaryColumn, Column, BeforeInsert, BeforeUpdate, Index, PrimaryGeneratedColumn } from 'typeorm';
import { nowInMillis } from '../../shared/Utils';

@Entity('user_wallet')
export class UserWallet {
    @PrimaryGeneratedColumn({ name: 'id', type: 'int'})
    public id: number;

    @Column({ name: 'user_id', type: 'int', nullable: false })
    public userId: number;

    @Column({ name: 'wallet', type: 'varchar', nullable: false })
    public wallet: string;

    // type in ['email', 'wallet']
    @Column({ name: 'type', type: 'varchar', nullable: false, default: 'new' })
    public type: string;

    // status in ['new', 'used', 'removed']
    @Column({ name: 'status', type: 'varchar', nullable: false, default: 'new' })
    public status: string;

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
