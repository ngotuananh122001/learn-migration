import { Entity, PrimaryColumn, Column, BeforeInsert, BeforeUpdate, Index, PrimaryGeneratedColumn } from 'typeorm';
import { nowInMillis } from '../../shared/Utils';

@Entity('promo_detail')
export class PromoDetail {
    @PrimaryGeneratedColumn({ name: 'id', type: 'int'})
    public id: number;

    @Column({ name: 'promo_id', type: 'int', nullable: false })
    public promoId: number;

    @Column({ name: 'code', type: 'varchar', nullable: false,  unique: true })
    public code: string;

    @Column({ name: 'promo_limit_id', type: 'int', nullable: true })
    public promoLimitId: number;


    @Column({ name: 'is_use', type: 'tinyint', width: 1, nullable: false, default: 0 })
    public isUse: boolean;

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