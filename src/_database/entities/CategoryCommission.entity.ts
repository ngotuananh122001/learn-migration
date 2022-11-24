import { Entity, PrimaryColumn, Column, BeforeInsert, BeforeUpdate, Index, PrimaryGeneratedColumn } from 'typeorm';
import { nowInMillis } from '../../shared/Utils';

@Entity('category_commission')
export class CategoryCommission {
    @PrimaryGeneratedColumn({ name: 'id', type: 'int'})
    public id: number;

    @Column({ name: 'category_name', type: 'varchar', nullable: true })
    public categoryName: string;

    @Column({ name: 'category_description', type: 'varchar', nullable: true })
    public categoryDescription: string;

    @Column({ name: 'logo_url', type: 'text', nullable: false })
    public logoUrl: string;

    @Column({ name: 'logo_type', type: 'varchar', length: 25, nullable: true })
    public logoType: string;

    @Column({ name: 'description_url', type: 'text', nullable: false })
    public descriptionUrl: string;

    @Column({ name: 'description_type', type: 'varchar', length: 25, nullable: true })
    public descriptionType: string;

    @Column({ name: 'is_deleted', type: 'tinyint', width: 1, nullable: true, default: false })
    public isDeleted: number;

    @Column({ name: 'created_by', type: 'varchar',length: 80, nullable: true })
    public createdBy: string;

    @Column({ name: 'updated_by', type: 'varchar', length: 80, nullable: true })
    public updatedBy: string;

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
