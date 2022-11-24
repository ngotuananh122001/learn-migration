import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate, Index } from 'typeorm';
import { nowInMillis } from '../../shared/Utils';

@Entity('nft_onchain')
@Index('contract_address', ['contractAddress'], { unique: false })
@Index('token_id', ['tokenId'], { unique: false })
@Index('token_uri', ['tokenUri'], { unique: false })
@Index('owner', ['owner'], { unique: false })
@Index('human_owner', ['humanOwner'], { unique: false })
@Index('block_timestamp', ['blockTimestamp'], { unique: false })
@Index('status', ['status'], { unique: false })
export class NftOnchain {
    @PrimaryGeneratedColumn({ name: 'id', type: 'int' })
    public id: number;

    @Column({ name: 'contract_address', type: 'varchar', nullable: false })
    public contractAddress: string;

    @Column({ name: 'token_id', type: 'varchar', nullable: false })
    public tokenId: string;

    @Column({ name: 'token_uri', type: 'varchar', length: 255, nullable: false })
    public tokenUri: string;

    @Column({ name: 'owner', type: 'varchar', length: 50, nullable: true })
    owner: string;

    @Column({ name: 'human_owner', type: 'varchar', length: 50, nullable: true })
    humanOwner: string;
  
    @Column({ name: 'meta_data', type: 'varchar', length: 5000, nullable: true })
    metaData: string;

    @Column({ name: 'block_timestamp', type: 'bigint', nullable: true })
    public blockTimestamp: number;
  
    @Column({ name: 'status', type: 'varchar', length: 50, nullable: true })
    status: string;
    
    @Column({ name: 'edition', type: 'int', nullable: true })
    edition: number;

    @Column({ name: 'create_by', type: 'varchar', length: 50, nullable: true })
    createBy: string;

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
