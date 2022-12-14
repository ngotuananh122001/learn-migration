import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate, Index, Unique } from 'typeorm';
import { nowInMillis } from '../../shared/Utils';

@Entity('transaction')
@Index('block_hash', ['blockHash'], { unique: false })
@Index('block_number', ['blockNumber'], { unique: false })
@Index('block_timestamp', ['blockTimestamp'], { unique: false })
@Index('created_at', ['createdAt'], { unique: false })
@Index('txid', ['txid'], { unique: false })
@Index('ref_transaction_id', ['refTransactionId'], { unique: false })
@Index('from_address', ['contractAddress'], { unique: false })
@Index('contract_address', ['fromAddress'], { unique: false })
@Index('unsigned_txid', ['unsignedTxid'], { unique: false })
@Index('status', ['status'], { unique: false })
@Index('type', ['type'], { unique: false })
@Index('retry_timestamp', ['retryTimestamp'], { unique: false })
@Index('updated_at', ['updatedAt'], { unique: false })
@Unique("tx_index", ["currency", "txid"])
export class Transaction {
  @PrimaryGeneratedColumn({ name: 'id', type: 'int', unsigned: true })
  public id: number;

  @Column('varchar', { name: 'txid', nullable: true })
  public txid: string | null;

  @Column({ name: 'ref_transaction_id', type: 'int', unsigned: true, nullable: true })
  public refTransactionId: number;

  @Column('varchar', { length: 200, name: 'currency', nullable: false })
  public currency: string;

  @Column('varchar', { length: 20, name: 'type', nullable: false })
  public type: string;

  @Column({ name: 'from_address', type: 'varchar', nullable: false })
  public fromAddress: string;

  @Column({ name: 'contract_address', type: 'varchar', nullable: false })
  public contractAddress: string;

  @Column({ 
    name: 'data',
    type: 'varchar',
    length: 10000,
    nullable: false,
  })
  public data: string;

  @Column('varchar', { length: 5000, name: 'error_message', nullable: true })
  public errorMessage: string | null;

  @Column('varchar', { length: 50, name: 'status', nullable: false })
  public status: string;

  @Column('varchar', { length: 100, name: 'unsigned_txid', nullable: true })
  public unsignedTxid: string;

  @Column({ name: 'block_number', type: 'bigint', nullable: true })
  public blockNumber: number;

  @Column({ name: 'block_hash', type: 'varchar', length: 100, nullable: true })
  public blockHash: string;

  @Column({ name: 'block_timestamp', type: 'bigint', nullable: true })
  public blockTimestamp: number;

  @Column({ 
    name: 'fee_amount',
    type: 'decimal',
    precision: 40,
    scale: 8,
    nullable: true,
  })
  public feeAmount: string;

  @Column('text', { name: 'unsigned_raw', nullable: true })
  public unsignedRaw: string | null;

  @Column('text', { name: 'signed_raw', nullable: true })
  public signedRaw: string | null;

  @Column({ name: 'retry_timestamp', type: 'bigint', nullable: true, default: true})
  public retryTimestamp: number;

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

  public isTemporaryTransaction(): boolean {
    if (!this.txid) {
      return true;
    }

    if (this.txid.startsWith('TMP_')) {
      return true;
    }

    return false;
  }
}
