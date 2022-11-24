import { Entity, PrimaryColumn, Column, BeforeInsert, BeforeUpdate, Index, PrimaryGeneratedColumn } from 'typeorm';
import { nowInMillis } from '../../shared/Utils';

@Entity('notification_master')
export class NotificationMaster {
    @PrimaryGeneratedColumn({ name: 'id', type: 'int'})
    public id: number;

    @Column({ name: 'notification_type_id', type: 'int', nullable: true})
    public notificationTypeId: number;

    @Column({ name: 'subject', type: 'varchar', length: 1000, nullable: true })
    public subject: string;

    @Column({ name: 'content', type: 'varchar', length: 1000, nullable: true })
    public content: string;

    @Column({ name: 'link_view', type: 'varchar', length: 1000, nullable: true })
    public linkView: string;

    @Column({ name: 'sending_time', type: 'bigint', nullable: true })
    public sendingTime: number;

    @Column({ name: 'status', type: 'int', nullable: true, default: 0 })
    public status: number;

    @Column({ name: 'recipient', type: 'bigint', nullable: true })
    public recipient: number;
  
    @Column({ name: 'send_to', type: 'varchar', length: 255, nullable: true})
    public sendTo: string;

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
