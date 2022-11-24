import { Entity, PrimaryColumn, Column, BeforeInsert, BeforeUpdate, Index, PrimaryGeneratedColumn } from 'typeorm';
import { nowInMillis } from '../../shared/Utils';

@Entity('banner')
export class Banner {
    @PrimaryGeneratedColumn({ name: 'id', type: 'int'})
    public id: number;

    @Column({ name: 'title', type: 'varchar', length: 150, unique: true })
    public title: string;

    @Column({ name: 'description', type: 'text', nullable: false })
    public description: string;

    @Column({ name: 'link', type: 'text', nullable: false })
    public link: string;


    @Column({ name: 'text_button', type: 'text', nullable: false })
    public textButton: string;

    @Column({ name: 'status', type: 'int', nullable: true, default: 0 })
    public status: number;

    @Column({ name: 'image', type: 'text', nullable: false })
    public image: string;

    @Column({ name: 'image_type', type: 'varchar', length: 25, nullable: false })
    public imageType: string;

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
