import { Entity, PrimaryColumn, Column, BeforeInsert, BeforeUpdate, Index, PrimaryGeneratedColumn } from 'typeorm';
import { nowInMillis } from '../../shared/Utils';

@Entity('brand')
export class Brand {
    @PrimaryGeneratedColumn({ name: 'id', type: 'int'})
    public id: number;

    @Column({ name: 'brand_name', type: 'varchar', length: 150 })
    public brandName: string;

    @Column({ name: 'description', type: 'text', nullable: false })
    public description: string;

    @Column({ name: 'status', type: 'int', nullable: true, default: 0 })
    public status: number;

    @Column({ name: 'logo_url', type: 'text', nullable: false })
    public logoUrl: string;

    @Column({ name: 'logo_type', type: 'varchar', length: 25, nullable: true })
    public logoType: string;

    @Column({ name: 'avatar', type: 'text', nullable: true })
    public avatar: string;

    @Column({ name: 'avatar_type', type: 'varchar', length: 25, nullable: true })
    public avatarType: string;

    @Column({ name: 'logo_black_url', type: 'text', nullable: false })
    public logoBlackUrl: string;

    @Column({ name: 'logo_black_type', type: 'varchar', length: 25, nullable: true })
    public logoBlackType: string;

    @Column({ name: 'description_url', type: 'text', nullable: false })
    public descriptionUrl: string;

    @Column({ name: 'description_type', type: 'varchar', length: 25, nullable: true })
    public descriptionType: string;

    @Column({ name: 'category_commission_id', type: 'int', nullable: false })
    public categoryCommissionId: number;

    @Column({ name: 'created_by', type: 'varchar',length: 80, nullable: true })
    public createdBy: string;

    @Column({ name: 'updated_by', type: 'varchar', length: 80, nullable: true })
    public updatedBy: string;

    @Column({ name: 'is_deleted', type: 'tinyint', width: 1, nullable: true, default: false })
    public isDeleted: number;

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
