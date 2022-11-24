import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate, Index } from 'typeorm';
import { nowInMillis } from '../../shared/Utils';

@Entity('collection')
@Index('slug', ['slug'], { unique: false })
@Index('status', ['status'], { unique: false })
@Index('type', ['type'], { unique: false })

export class Collection {
    @PrimaryGeneratedColumn({ name: 'id', type: 'int' })
    public id: number;

    @Column({ name: 'name', type: 'varchar', length: 255, nullable: false })
    public name: string;

    @Column({ name: 'slug', type: 'varchar', length: 255, nullable: false })
    public slug: string;

    @Column({ name: 'image_url', type: 'text', nullable: false })
    public imageUrl: string;

    @Column({ name: 'description', type: 'text', nullable: true })
    public description: string;

    @Column({ name: 'payment_token', type: 'varchar', length: 20, nullable: false })
    public paymentToken: string;

    @Column({ name: 'status', type: 'varchar', length: 25, nullable: true })
    public status: string;

    @Column({ name: 'type', type: 'varchar', length: 25, nullable: true })
    public type: string;


    @Column({ name: 'data', type: 'text', nullable: true })
    public data: string;

    @Column({ name: 'brand_id', type: 'int', nullable: true ,default: null})
    public brandId: number;

    @Column({ name: 'category_id', type: 'int', nullable: true ,default: null})
    public categoryId: number;

    @Column({ name: 'created_by', type: 'varchar',length: 80, nullable: true })
    public createdBy: string;

    @Column({ name: 'updated_by', type: 'varchar', length: 80, nullable: true })
    public updatedBy: string;

    @Column({ name: 'is_deleted', type: 'tinyint', width: 1, nullable: true, default: false })
    public isDeleted: number;

    @Column({ name: 'created_at', type: 'bigint', nullable: false })
    public createdAt: number;

    @Column({ name: 'updated_at', type: 'bigint', nullable: false })
    public updatedAt: number;
    

    @BeforeInsert()
    public updateCreatedAt() {
        this.createdAt = nowInMillis();
        this.updatedAt = nowInMillis();
    }

    @BeforeUpdate()
    public updateUpdatedAt() {
        this.updatedAt = nowInMillis();
    }
}
