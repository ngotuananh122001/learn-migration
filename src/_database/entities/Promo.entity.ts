import { Entity, PrimaryColumn, Column, BeforeInsert, BeforeUpdate, Index, PrimaryGeneratedColumn } from 'typeorm';
import { nowInMillis } from '../../shared/Utils';

@Entity('promo')
export class Promo {
    @PrimaryGeneratedColumn({ name: 'id', type: 'int'})
    public id: number;

    @Column({ name: 'name', type: 'varchar', nullable: true, unique: true })
    public name: string;

    @Column({ name: 'category_commission_id', type: 'int', nullable: true })
    public categoryCommissionId: number;

    @Column({ name: 'brand_id', type: 'int', nullable: true })
    public brandId: number;

    @Column({ name: 'collection_id', type: 'int', nullable: true })
    public collectionId: number;

    @Column({ name: 'vendor_id', type: 'int', nullable: true })
    public vendorId: number;

    @Column({ name: 'limit', type: 'int', nullable: true })
    public limit: number

    @Column({ name: 'minters', type: 'varchar',  length: 255, nullable: true })
    public minters: string;

    @Column({ name: 'promo_type', type: 'tinyint', width: 1, nullable: false, default: 0 })
    public promoType: boolean;
    // 0 Discount by money value : 1 Discount by pecent


    @Column({name: 'price', type: 'decimal', precision: 65, scale: 18, nullable: true})
    public price: number;

    @Column({ name: 'code_number', type: 'int', nullable: true })
    public codeNumber: number;


    @Column({ name: 'code_length', type: 'int', nullable: true })
    public codeLength: number;


    @Column({ name: 'prefix', type: 'varchar', nullable: true })
    public prefix: string;


    @Column({ name: 'suffixes', type: 'varchar', nullable: true })
    public suffixes: string;

    @Column({ name: 'percent', type: 'int', nullable: true })
    public percent: number;

    @Column({name: 'max_amount', type: 'decimal', precision: 65, scale: 18, nullable: true})
    public maxAmount: number;

    @Column({name: 'min_amount', type: 'decimal', precision: 65, scale: 18, nullable: true})
    public minAmount: number;


    @Column({ name: 'is_active', type: 'tinyint', width: 1, nullable: false, default: 0 })
    public isActive: boolean;

    @Column({ name: 'type', type: 'varchar',  length: 255, nullable: true })
    public type: string;
    // morecode : onecode


    @Column({ name: 'status', type: 'tinyint', width: 1, nullable: false, default: 0 })
    public status: number;


    @Column({ name: 'discount_type', type: 'tinyint', width: 1, nullable: false, default: 0 })
    public discountType: boolean;
    // 0 Discount on Service Fees; 1 Discount on the Price of Nft

    @Column({ name: 'start_time', type: 'bigint', nullable: true })
    public startTime: number;

    @Column({ name: 'end_time', type: 'bigint', nullable: true })
    public endTime: number;

    @Column({ name: 'is_vendor', type: 'tinyint', width: 1, nullable: false, default: 0 })
    public isVendor: number;

    @Column({ name: 'vendor', type: 'varchar',  length: 255, nullable: true })
    public vendor: string;

    @Column({ name: 'referral', type: 'varchar',  length: 255, nullable: true })
    public referral: string;

    @Column({ name: 'create_for', type: 'varchar',  length: 255, nullable: true })
    public createFor: string;

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
