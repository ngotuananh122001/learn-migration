import { Entity, PrimaryColumn, Column, BeforeInsert, BeforeUpdate, Index, PrimaryGeneratedColumn } from 'typeorm';
import { nowInMillis } from '../../shared/Utils';

@Entity('faq')
export class Faq {
    @PrimaryGeneratedColumn({ name: 'id', type: 'int'})
    public id: number;

    @Column({ name: 'category_id', type: 'int', nullable: true })
    public categoryId: number;

    @Column({ name: 'question', type: 'text', nullable: true })
    public question: string;

    @Column({ name: 'answer', type: 'text', nullable: true })
    public answer: string;

    @Column({ name: 'logo_url', type: 'text', nullable: false })
    public logoUrl: string;

    @Column({ name: 'logo_type', type: 'varchar', length: 25, nullable: true })
    public logoType: string;

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
