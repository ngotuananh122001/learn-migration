import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate } from 'typeorm';
import { nowInMillis } from '../../shared/Utils';
import {IAdmin} from "../interfaces/IAdmin.interface";
@Entity('admin')
export class Admin implements IAdmin{
  @PrimaryGeneratedColumn({ name: 'id', type: 'int' })
  public id: number;

  @Column({ name: 'username', type: 'varchar', length: 80, nullable: false, unique: true })
  public username: string;

  @Column({ name: 'email', type: 'varchar', length: 191, nullable: false, unique: true })
  public email: string;

  @Column({ name: 'password', type: 'varchar', length: 255, nullable: false })
  public password: string;

  @Column({ name: 'avatar_url', type: 'varchar', length: 255, nullable: true })
  public avatarUrl: string;

  @Column({ name: 'full_name', type: 'varchar', length: 100, nullable: true })
  public fullName: string;

  @Column({ name: 'created_at', type: 'bigint', nullable: true })
  public createdAt: number;

  @Column({ name: 'updated_at', type: 'bigint', nullable: true })
  public updatedAt: number;

  @Column({ name: 'is_active', type: 'tinyint', width: 1, nullable: false, default: 1 })
  public isActive: boolean;

  @Column({ name: 'is_active_2fa', type: 'tinyint', width: 1, nullable: false, default: 0 })
  public isActive2fa: boolean;

  @Column({ name: 'two_factor_authentication_secret', type: 'varchar', length: 255, nullable: true })
  public twoFactorAuthenticationSecret: string;

  @Column({ name: 'status', type: 'varchar', length: 25, nullable: true, default: 'request' })
  public status: string;

  @Column({ name: 'group', type: 'bigint', nullable: true, default: 0 })
  public group: number;

  @Column({ name: 'token', type: 'varchar', length: 255, nullable: true })
  public token: string;

  @Column({ name: 'data', type: 'text', nullable: true })
  public data: string;

  @Column({ name: 'vendor_id', type: 'int', nullable: true })
  public vendorId: number;

  @Column({ name: 'is_delete', type: 'tinyint', width: 1, nullable: false, default: 0 })
  public isDelete: boolean;

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
