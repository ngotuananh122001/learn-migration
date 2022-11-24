import { Entity, PrimaryColumn,ManyToOne, Column, BeforeInsert, BeforeUpdate, Index, PrimaryGeneratedColumn } from 'typeorm';
import { nowInMillis } from '../../shared/Utils';
import { CategoryAbout } from "./CategoryAbout.entity";
@Entity('about')
export class About {
    @PrimaryGeneratedColumn({ name: 'id', type: 'int'})
    public id: number;

    // @ManyToOne(() => CategoryAbout, (category) => category.abouts)
    // categoryAbout: CategoryAbout

    // @Column({ name: 'title', type: 'varchar', length: 150 })
    // public title: string;

    // @Column({ name: 'description',type: 'varchar', length: 10000, nullable: true })
    // public description: string;
    

    // @Column({ name: 'logo_url', type: 'text', nullable: false })
    // public logoUrl: string;

    // @Column({ name: 'logo_type', type: 'varchar', length: 25, nullable: true })
    // public logoType: string;

    // @Column({ name: 'status', type: 'int', nullable: true, default: 0 })
    //  public status: number;

    // @Column({ name: 'created_at', type: 'bigint', nullable: true })
    // public createdAt: number;

    // @Column({ name: 'updated_at', type: 'bigint', nullable: true })
    // public updatedAt: number;


    // @Column({ name: 'created_by', type: 'varchar',length: 25, nullable: true })
    // public createdBy: string;

    // @Column({ name: 'updated_by', type: 'varchar', length: 25, nullable: true })
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
