import { Entity, PrimaryColumn, Column, BeforeInsert, BeforeUpdate, Index, PrimaryGeneratedColumn } from 'typeorm';
import { nowInMillis } from '../../shared/Utils';

@Entity('promo_log')
export class PromoLog {
    @PrimaryGeneratedColumn({ name: 'id', type: 'int'})
    public id: number;

    @Column({ name: 'user_id', type: 'int' })
    public userId: number;

    @Column({ name: 'promo_id', type: 'int'})
    public promoId: number;

    @Column({ name: 'nft_id', type: 'int', nullable: true })
    public nftId: number;

    @Column({ name: 'price', type: 'bigint', nullable: true })
    public price: number;

    @Column({ name: 'applied_time', type: 'bigint', nullable: true })
    public appliedTime: number

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
