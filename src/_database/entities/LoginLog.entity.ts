import { LoginStatus } from '../../constants/login';
import { Entity, Column, BeforeInsert,BeforeUpdate, PrimaryGeneratedColumn } from 'typeorm';
import { nowInMillis } from '../../shared/Utils';

@Entity('login_log')
export class LoginLog {
  @PrimaryGeneratedColumn({ name: 'id', type: 'bigint', unsigned: true })
  public id: number;

  @Column({ name: 'user_id', type: 'int', nullable: true })
  public userId: number;

  @Column({ name: 'ip', type: 'varchar', nullable: true })
  public ip: string;

  @Column({ name: 'status', type: 'varchar', nullable: true, default: LoginStatus.PENDING })
  public status: string;

  @Column({ name: 'location', type: 'varchar', nullable: true })
  public location: string;

  @Column({ name: 'time', type: 'bigint', nullable: true })
  public time: number;

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
