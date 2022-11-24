import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate, Index } from 'typeorm';
import { nowInMillis } from '../../shared/Utils';

@Entity('transfer_log')
@Index('contract_address', ['contractAddress'], { unique: false })
@Index('action', ['action'], { unique: false })
@Index('price', ['price'], { unique: false })
@Index('from', ['from'], { unique: false })
@Index('to', ['to'], { unique: false })
@Index('txid', ['txid'], { unique: false })
@Index('block_number', ['blockNumber'], { unique: false })
@Index('block_hash', ['blockHash'], { unique: false })
export class TransferLog {
    @PrimaryGeneratedColumn({ name: 'id', type: 'int' })
    public id: number;

    @Column({ name: 'contract_address', type: 'varchar', nullable: false })
    public contractAddress: string;

    @Column({ name: 'action', type: 'varchar', length: 50, nullable: true })
    action: string;


    @Column({ name: 'from', type: 'varchar', length: 50, nullable: true })
    from: string;

    @Column({ name: 'to', type: 'varchar', length: 50, nullable: true })
    to: string;

    @Column({ name: 'price', type: 'varchar', nullable: false })
    public price: string;

    @Column({ name: 'txid', type: 'varchar', nullable: true })
    txid: string;

    @Column({ name: 'block_number', type: 'bigint', nullable: true })
    public blockNumber: number;
  
    @Column({ name: 'block_hash', type: 'varchar', length: 100, nullable: true })
    public blockHash: string;

  

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
