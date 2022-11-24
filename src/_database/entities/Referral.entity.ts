import { Entity, PrimaryColumn, Column, BeforeInsert, BeforeUpdate, Index, PrimaryGeneratedColumn } from 'typeorm';
import { nowInMillis } from '../../shared/Utils';

@Entity('referral')
export class Referral {
  @PrimaryGeneratedColumn({ name: 'id', type: 'int'})
  public id: number;

  @Column({ name: 'link_referral', type: 'varchar',  length: 255, nullable: true })
  public linkReferrak: string;

  @Column({ name: 'referral_code', type: 'varchar',  length: 255, nullable: true })
  public referralCode: string;

  @Column({ name: 'wallet', type: 'varchar', length: 255, nullable: true, unique: true })
  public wallet: string;
  
  @Column({ name: 'gift_referral', type: 'varchar',  length: 255, nullable: true })
  public giftsReferrals: string;

  @Column({ name: 'gift_referral_recipient', type: 'varchar',  length: 255, nullable: true })
  public giftsReferralRecipients: string;


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
