import { Entity, PrimaryColumn, Column, BeforeInsert, BeforeUpdate, Index, PrimaryGeneratedColumn } from 'typeorm';
import { nowInMillis } from '../../shared/Utils';

@Entity('commission')
export class Commission {
    @PrimaryGeneratedColumn({ name: 'id', type: 'int' })
    public id: number;

    @Column({ name: 'id_admin', type: 'int',nullable: true })
    public idAdmin: number;

    @Column({ name: 'name_admin', type: 'text', nullable: true })
    public nameAdmin: string;

    @Column({ name: 'seller_commission', type: 'int', nullable: true })
    public sellerCommission: number;

    @Column({ name: 'buyer_commission', type: 'int', nullable: true })
    public buyerCommission : number;

    @Column({ name: 'status', type: 'boolean', nullable: false, default: true })
    public status: boolean;


    @Column({ name: 'category_commission_id', type: 'int', nullable: true })
    public categoryCommissionId: number;

    @Column({ name: 'brand_id', type: 'int', nullable: true })
    public brandId: number;

    @Column({ name: 'collection_id', type: 'int', nullable: true })
    public collectionId: number;

    @Column({ name: 'vendor_id', type: 'int', nullable: true })
    public vendorId: number;


    @Column({ name: 'log_id', type: 'int', nullable: true })
    public logId: number;

    @Column({ name: 'type', type: 'bigint', nullable: false, default: 0 })
     public type: number;

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
