import { Entity, PrimaryColumn, Column, BeforeInsert, BeforeUpdate, Index, PrimaryGeneratedColumn } from 'typeorm';
import { nowInMillis } from '../../shared/Utils';

@Entity('kyc')
export class Kyc {
    @PrimaryGeneratedColumn({ name: 'id', type: 'int'})
    public id: number;

    @Column({ name: 'user_id', type: 'int', nullable: false })
    public userId: number;

    @Column({ name: 'application_id', type: 'varchar', nullable: false })
    public applicationId: string;

    @Column({ name: 'user_kyc', type: 'varchar', nullable: false })
    public userKyc: string;

    @Column({ name: 'status_code', type: 'int', nullable: true })
    public statusCode: number;

    @Column({ name: 'data', type: 'longtext', nullable: true})
    public data: string;

    @Column({ name: 'is_update', type: 'tinyint', width: 1, nullable: true, default: false })
    public isUpdate: number;

    @Column({ name: 'status_name', type: 'varchar', nullable: true })
    public statusName: string;

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
