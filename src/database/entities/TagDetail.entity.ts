import { Entity, PrimaryColumn, Column, BeforeInsert, BeforeUpdate, Index, PrimaryGeneratedColumn } from 'typeorm';
import { nowInMillis } from '../../shared/Utils';

@Entity('tag_detail')
export class TagDetail {
    @PrimaryGeneratedColumn({ name: 'id', type: 'int'})
    public id: number;

    @Column({ name: 'tag_id', type: 'int', nullable: false })
    public tagId: number;

    @Column({ name: 'category_commission_id', type: 'int', nullable: false })
    public categoryCommissionId: number;

    @Column({ name: 'brand_id', type: 'int', nullable: true })
    public brandId: number;

    @Column({ name: 'collection_id', type: 'int', nullable: true })
    public collectionId: number;

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
