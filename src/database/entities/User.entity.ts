import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate, Index } from 'typeorm';
import { nowInMillis } from '../../shared/Utils';

@Entity('user')
@Index('email', ['email'], { unique: true })
@Index('username', ['username'], { unique: true })
@Index('wallet', ['wallet'], { unique: true })
@Index('status', ['status'], { unique: false })
@Index('type', ['type'], { unique: false })
export class User {
  @PrimaryGeneratedColumn({ name: 'id', type: 'int' })
  public id: number;

  @Column({ name: 'username', type: 'varchar', length: 80, nullable: true, unique: true })
  public username: string;

  @Column({ name: 'email', type: 'varchar', length: 191, nullable: false, unique: true })
  public email: string;

  @Column({ name: 'password', type: 'varchar', length: 255, nullable: false, default: '' })
  public password: string;

  @Column({ name: 'avatar_url', type: 'varchar', length: 255, nullable: true })
  public avatarUrl: string;

  @Column({ name: 'first_name', type: 'varchar', length: 100, nullable: true })
  public firstName: string;

  @Column({ name: 'last_name', type: 'varchar', length: 100, nullable: true })
  public lastName: string;

  @Column({ name: 'date_of_birth', type: 'date', nullable: true })
  public dateOfBirth: Date;

  @Column({ name: 'phone', type: 'varchar', length: 15, nullable: true })
  public phone: string;

  @Column({ name: 'created_at', type: 'bigint', nullable: true })
  public createdAt: number;

  @Column({ name: 'updated_at', type: 'bigint', nullable: true })
  public updatedAt: number;

  @Column({ name: 'is_active_2fa', type: 'tinyint', width: 1, nullable: false, default: 0 })
  public isActive2fa: boolean;

  @Column({ name: 'is_active_email_code', type: 'tinyint', width: 1, nullable: false, default: 0 })
  public isActiveEmailCode: boolean;

  @Column({ name: 'two_factor_authentication_secret', type: 'varchar', length: 255, nullable: true })
  public twoFactorAuthenticationSecret: string;

  @Column({ name: 'email_code', type: 'varchar', length: 255, nullable: true })
  public emailCode: string;

  @Column({ name: 'is_active_kyc', type: 'tinyint', width: 1, nullable: false, default: 0 })
  public isActiveKyc: boolean;

  @Column({ name: 'wallet', type: 'varchar', length: 255, nullable: true, unique: true })
  public wallet: string;

  @Column({ name: 'status', type: 'varchar', length: 25, nullable: true, default: 'request' })
  public status: string;

  @Column({ name: 'type', type: 'varchar', length: 25, nullable: true })
  public type: string;

  @Column({ name: 'token', type: 'varchar', length: 255, nullable: true })
  public token: string;

  @Column({ name: 'email_code_active', type: 'varchar', length: 255, nullable: true })
  public emailCodeActive: string;

  @Column({ name: 'group', type: 'bigint', nullable: false, default: 0 })
  public group: number;

  @Column({ name: 'data', type: 'text', nullable: true })
  public data: string;

  @Column({ name: 'country_id', type: 'int', nullable: true })
  public countryId: number;

  @Column({ name: 'is_vendor', type: 'boolean', nullable: true })
  public isVendor: boolean;

  @Column({ name: 'vendor_name', type: 'varchar', nullable: true ,length: 255, unique: true})
  public vendorName: string;

  @Column({ name: 'referral_name', type: 'varchar', nullable: true,length: 255, unique: true})
  public referralName: string;

  @Column({ name: 'vendor_id', type: 'int', nullable: true })
  public vendorId: number;

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
