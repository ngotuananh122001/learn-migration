import { Entity, PrimaryColumn, Column, BeforeInsert, BeforeUpdate, Index, PrimaryGeneratedColumn } from 'typeorm';
import { nowInMillis } from '../../shared/Utils';

@Entity('news')
export class News {
    @PrimaryGeneratedColumn({ name: 'id', type: 'int'})
    public id: number;

    @Column({ name: 'title', type: 'varchar', length: 150 })
    public title: string;

    @Column({ name: 'link', type: 'varchar', length: 2048 })
    public link: string;

    @Column({ name: 'summary', type: 'varchar', length: 500 })
    public summary: string;

    @Column({ name: 'image', type: 'text', nullable: false })
    public image: string;
    
    @Column({ name: 'image_type', type: 'varchar', length: 25, nullable: true })
    public imageType: string;

    @Column({ name: 'status', type: 'int', nullable: true, default: 0 })
    public status: number;

    @Column({ name: 'publish_date', type: 'bigint', nullable: true })
    public publishDate: number;

    @Column({ name: 'category_commission_id', type: 'int', nullable: true })
    public categoryCommissionId: number;

    @Column({ name: 'view', type: 'int', nullable: true, default: 0 })
    public view: number;

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
