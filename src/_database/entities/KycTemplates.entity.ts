import { Entity, PrimaryColumn, Column, BeforeInsert, BeforeUpdate, Index, PrimaryGeneratedColumn } from 'typeorm';
import { nowInMillis } from '../../shared/Utils';

@Entity('kyc_templates')
export class KycTemplates {
    @PrimaryGeneratedColumn({ name: 'id', type: 'int'})
    public id: number;

    @Column({ name: 'description', type: 'varchar', nullable: true })
    public description: string;

    @Column({ name: 'type', type: 'varchar', nullable: true })
    public type: string;


    @Column({ name: 'template_id', type: 'varchar', nullable: true })
    public templateId: string;

    @Column({ name: 'name', type: 'varchar', nullable: true })
    public name: string;

    @Column({ type: 'tinyint', width: 1, name: 'is_sign_up_template', nullable: false, default: true })
    public isSignUpTemplate: number;


    @Column({ type: 'tinyint', width: 1, name: 'sign_up_method_email', nullable: false, default: true })
    public signUpMethodEmail: number;


    @Column({ type: 'tinyint', width: 1, name: 'sign_up_method_wallet', nullable: false, default: true })
    public signUpMethodWallet: number;

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
