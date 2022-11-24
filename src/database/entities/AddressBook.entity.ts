import { Entity, PrimaryColumn, Column, BeforeInsert, BeforeUpdate, Index, PrimaryGeneratedColumn } from 'typeorm';
import { nowInMillis } from '../../shared/Utils';
// import Kms from '../encrypt/Kms';

@Entity('address_book')
export class AddressBook {
  @PrimaryGeneratedColumn({ name: 'id', type: 'int'})
  public id: number;

  @Column({ name: 'address', type: 'varchar', length: 150, nullable: true })
  public address: string;

  @Column({ name: 'name',type: 'varchar', length: 100, nullable: true })
  public name: string;


  @Column({ name: 'owner', type: 'varchar', length: 150, nullable: true })
  public owner: string;


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
