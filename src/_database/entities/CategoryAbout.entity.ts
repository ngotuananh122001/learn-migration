import { Entity, PrimaryColumn, OneToMany,Column, BeforeInsert, BeforeUpdate, Index, PrimaryGeneratedColumn } from 'typeorm';
import { nowInMillis } from '../../shared/Utils';
import { About } from "../entities/About.entity";
@Entity('category_about')
export class CategoryAbout {
    @PrimaryGeneratedColumn({ name: 'id', type: 'int'})
    public id: number;

    // @Column({ name: 'section', type: 'varchar', nullable: true })
    // public section: string;

    // @OneToMany(() => About, (about) => about.categoryAbout)
    // abouts: About[]

    // @Column({ name: 'created_at', type: 'bigint', nullable: true })
    // public createdAt: number;

    // @Column({ name: 'updated_at', type: 'bigint', nullable: true })
    // public updatedAt: number;

    // @Column({ name: 'created_by', type: 'varchar',length: 80, nullable: true })
    // public createdBy: string;

    // @Column({ name: 'updated_by', type: 'varchar', length: 80, nullable: true })
    // public updatedBy: string;

    // @BeforeInsert()
    // public updateCreateDates() {
    //     this.createdAt = nowInMillis();
    //     this.updatedAt = nowInMillis();
    // }

    // @BeforeUpdate()
    // public updateUpdateDates() {
    //     this.updatedAt = nowInMillis();
    // }

}
