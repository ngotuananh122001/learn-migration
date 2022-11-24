import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate, Index } from 'typeorm';
import { nowInMillis } from '../../shared/Utils';

@Entity('order_log')
@Index('contract_address', ['contractAddress'], { unique: false })
@Index('order_id', ['orderId'], { unique: false })
@Index('action', ['action'], { unique: false })
@Index('token_address', ['tokenAddress'], { unique: false })
@Index('token_id', ['tokenId'], { unique: false })
@Index('price', ['price'], { unique: false })
@Index('price_commission', ['priceCommission'], { unique: false })
@Index('payment_token', ['paymentToken'], { unique: false })
@Index('txid', ['txid'], { unique: false })
@Index('block_number', ['blockNumber'], { unique: false })
@Index('block_hash', ['blockHash'], { unique: false })
@Index('block_timestamp', ['blockTimestamp'], { unique: false })
@Index('status', ['status'], { unique: false })
export class OrderLog {
    @PrimaryGeneratedColumn({ name: 'id', type: 'int' })
    public id: number;

    @Column({ name: 'contract_address', type: 'varchar', nullable: false })
    public contractAddress: string;

    @Column({ name: 'order_id', type: 'int', nullable: false })
    public orderId: number;

    @Column({ name: 'action', type: 'varchar', length: 50, nullable: true })
    action: string;

    @Column({ name: 'token_address', type: 'varchar', nullable: false })
    public tokenAddress: string;

    @Column({ name: 'token_id', type: 'varchar', nullable: false })
    public tokenId: string;

    @Column({ name: 'price', type: 'varchar', nullable: false })
    public price: string;

    @Column({ name: 'price_convert', type: 'decimal',precision: 10, scale: 4, nullable: true })
    public priceConvert: number;

    @Column({ name: 'price_commission', type: 'varchar', nullable: false, default: 0 })
    public priceCommission: string;

    @Column({ name: 'payment_token', type: 'varchar', nullable: false })
    public paymentToken: string;
  
    @Column({ name: 'txid', type: 'varchar', nullable: true })
    txid: string;

    @Column({ name: 'block_number', type: 'bigint', nullable: true })
    public blockNumber: number;
  
    @Column({ name: 'block_hash', type: 'varchar', length: 100, nullable: true })
    public blockHash: string;

    @Column({ name: 'block_timestamp', type: 'bigint', nullable: true })
    public blockTimestamp: number;
  
    @Column({ name: 'status', type: 'varchar', length: 50, nullable: true })
    status: string;

    @Column({ name: 'created_at', type: 'bigint', nullable: false })
    public createdAt: number;

    @Column({ name: 'updated_at', type: 'bigint', nullable: false })
    public updatedAt: number;

    @BeforeInsert()
    public updateCreatedAt() {
        this.createdAt = nowInMillis();
        this.updatedAt = nowInMillis();
    }

    @BeforeUpdate()
    public updateUpdatedAt() {
        this.updatedAt = nowInMillis();
    }
}
