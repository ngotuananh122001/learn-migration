import { Entity, PrimaryColumn, Column, BeforeInsert, BeforeUpdate, Index, PrimaryGeneratedColumn } from 'typeorm';
import { nowInMillis } from '../../shared/Utils';

@Entity('tag')
export class Tag {
    @PrimaryGeneratedColumn({ name: 'id', type: 'int'})
    public id: number;

    @Column({ name: 'tag_name', type: 'varchar', nullable: true })
    public tagName: string;

    @Column({ name: 'tag_value', type: 'varchar', nullable: true })
    public tagValue: string;

    @Column({ name: 'type_category', type: 'int', nullable: true })
    public typeCategory: number;

    @Column({ name: 'category_commission_id', type: 'int', nullable: true })
    public categoryCommissionId: number;

    @Column({ name: 'brand_id', type: 'int', nullable: true })
    public brandId: number;

    @Column({ name: 'collection_id', type: 'int', nullable: true })
    public collectionId: number;


    @Column({ name: 'description', type: 'varchar', nullable: true })
    public description: string;

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
