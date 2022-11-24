import { Entity, PrimaryColumn, Column, BeforeInsert, BeforeUpdate, Index, PrimaryGeneratedColumn } from 'typeorm';
import { nowInMillis } from '../../shared/Utils';

@Entity('tax_detail')
export class TaxDetail {
    @PrimaryGeneratedColumn({ name: 'id', type: 'int'})
    public id: number;

    @Column({ name: 'category_commission_id', type: 'int', nullable: true })
    public categoryCommissionId: number;

    @Column({ name: 'brand_id', type: 'int', nullable: true })
    public brandId: number;

    @Column({ name: 'collection_id', type: 'int', nullable: true })
    public collectionId: number;

    @Column({ name: 'vendor_id', type: 'int', nullable: true })
    public vendorId: number;

    // @Column({ name: 'country_id', type: 'int', nullable: true })
    // public countryId: number;

    @Column({ name: 'tax_id', type: 'int', nullable: false })
    public taxId: number;

    @Column({ name: 'tax_fee', type: 'int', nullable: false })
    public taxFee: number;

    @Column({ name: 'log_id', type: 'int', nullable: true })
    public logId: number;


    @Column({ name: 'status', type: 'boolean', nullable: false, default: true })
    public status: boolean;

    @Column({ name: 'is_active', type: 'boolean', nullable: false ,default: true })
    public isActive: boolean;

    @Column({ name: 'created_at', type: 'bigint', nullable: true })
    public createdAt: number;

    @Column({ name: 'updated_at', type: 'bigint', nullable: true })
    public updatedAt: number;


    @Column({ name: 'created_by', type: 'varchar',length: 80, nullable: true })
    public createdBy: string;

    @Column({ name: 'updated_by', type: 'varchar', length: 80, nullable: true })
    public updatedBy: string;

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
