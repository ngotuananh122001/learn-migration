import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate, Index } from 'typeorm';
import { nowInMillis } from '../../shared/Utils';

@Entity('order_onchain')
@Index('contract_address', ['contractAddress'], { unique: false })
@Index('order_id', ['orderId'], { unique: false })
@Index('owner', ['owner'], { unique: false })
@Index('token_address', ['tokenAddress'], { unique: false })
@Index('token_id', ['tokenId'], { unique: false })
@Index('price', ['price'], { unique: false })
@Index('payment_token', ['paymentToken'], { unique: false })
@Index('is_onsale', ['isOnsale'], { unique: false })
@Index('block_timestamp', ['blockTimestamp'], { unique: false })
@Index('status', ['status'], { unique: false })
export class OrderOnchain {
    @PrimaryGeneratedColumn({ name: 'id', type: 'int' })
    public id: number;

    @Column({ name: 'contract_address', type: 'varchar', nullable: false })
    public contractAddress: string;

    @Column({ name: 'order_id', type: 'int', nullable: false })
    public orderId: number;

    @Column({ name: 'owner', type: 'varchar', nullable: false })
    public owner: string;

    @Column({ name: 'token_address', type: 'varchar', nullable: true })
    public tokenAddress: string;

    @Column({ name: 'token_id', type: 'varchar', nullable: false })
    public tokenId: string;

    @Column({ name: 'price', type: 'varchar', nullable: false })
    public price: string;

    @Column({ name: 'price_convert', type: 'decimal',precision: 10, scale: 4, nullable: true })
    public priceConvert: number;

    @Column({ name: 'payment_token', type: 'varchar', nullable: false })
    public paymentToken: string;

    @Column({ type: 'tinyint', width: 1, name: 'is_onsale', nullable: false, default: true })
    public isOnsale: number;

    @Column({ name: 'block_timestamp', type: 'bigint', nullable: true })
    public blockTimestamp: number;
  
    @Column({ name: 'status', type: 'varchar', length: 50, nullable: true })
    status: string;

    @Column({ name: 'exp_time', type: 'bigint', nullable: false })
    public expTime: number;

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
