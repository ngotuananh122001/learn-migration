import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate, Index } from 'typeorm';
import { nowInMillis } from '../../shared/Utils';

@Entity('transaction_request')
@Index('request_id', ['requestId'], { unique: true })
@Index('currency', ['currency'], { unique: false })
@Index('address', ['address'], { unique: false })
@Index('method', ['method'], { unique: false })
@Index('status', ['status'], { unique: false })
@Index('ref_transaction_id', ['refTransactionId'], { unique: false })
@Index('updated_at', ['updatedAt'], { unique: false })
export class TransactionRequest {
  @PrimaryGeneratedColumn({ name: 'id', type: 'int'})
  public id: number;

  @Column('varchar', { length: 50, name: 'request_id', nullable: false })
  public requestId: string;

  @Column('varchar', { length: 200, name: 'currency', nullable: false })
  public currency: string;

  @Column({ name: 'address', type: 'varchar', unique: false })
  public address: string;

  @Column({ name: 'method', type: 'varchar', length: 255, nullable: false })
  public method: string;

  @Column({ 
    name: 'data',
    type: 'varchar',
    length: 10000,
    nullable: false,
  })
  public data: string;

  @Column('varchar', { length: 50, name: 'status', nullable: false })
  public status: string;

  @Column({ name: 'ref_transaction_id', type: 'int', unsigned: true, nullable: true })
  public refTransactionId: number;

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
