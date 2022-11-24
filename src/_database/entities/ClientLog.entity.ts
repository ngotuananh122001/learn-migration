import { Entity, Column, BeforeInsert,BeforeUpdate, PrimaryGeneratedColumn, Index } from 'typeorm';
import { nowInMillis } from '../../shared/Utils';

@Entity('client_log')
export class ClientLog {
  @PrimaryGeneratedColumn({ name: 'id', type: 'bigint', unsigned: true })
  id: number;

  @Column({ name: 'ip_address', type: 'varchar', nullable: true })
  ipAddress: string;

  @Column({ name: 'url', type: 'varchar', nullable: true })
  url: string;

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
