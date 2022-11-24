import { Entity, PrimaryColumn, Column, BeforeInsert, BeforeUpdate, Index, PrimaryGeneratedColumn } from 'typeorm';
import { nowInMillis } from '../../shared/Utils';

@Entity('notification_detail')
export class NotificationDetail {
    @PrimaryGeneratedColumn({ name: 'id', type: 'int'})
    public id: number;

    @Column({ name: 'notification_id', type: 'int', nullable: false })
    public notificationId: number;


    @Column({ name: 'notification_to', type: 'varchar', length: 255, nullable: true})
    public notificationTo: string;

    @Column({ name: 'notification_from', type: 'varchar', length: 255, nullable: true})
    public notificationFrom: string;

    @Column({ name: 'title', type: 'varchar', length: 1000, nullable: true})
    public title: string;

    @Column({ name: 'message', type: 'varchar', length: 1000, nullable: true})
    public message: string;

    @Column({ name: 'data', type: 'varchar', length: 1000, nullable: true})
    public data: string;

    @Column({ name: 'type', type: 'tinyint', width: 1, nullable: false, default: 0})
    public type: number;

    @Column({ name: 'is_send', type: 'tinyint', width: 1, nullable: false, default: 0 })
    public isSend: boolean;

    @Column({ name: 'is_read', type: 'tinyint', width: 1, nullable: false, default: 0 })
    public isRead: boolean;

    @Column({ name: 'created_at', type: 'bigint', nullable: true })
    public createdAt: number;

    @Column({ name: 'updated_at', type: 'bigint', nullable: true })
    public updatedAt: number;

    @Column({ name: 'created_by', type: 'varchar',length: 80, nullable: true })
    public createdBy: string;

    @Column({ name: 'updated_by', type: 'varchar', length: 80, nullable: true })
    public updatedBy: string;


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