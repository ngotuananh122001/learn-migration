import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import {
  Address,
  User,
  Admin,
  CurrencyConfig,
  KmsCmk,
  KmsDataKey,
  Transaction,
  NftOnchain,
  OrderOnchain,
  OrderLog,
  NftLog,
  MailJob,
  MailLog,
  LatestBlock,
  Config,
  Collection,
  MetaData,
  TransactionRequest,
  OfferLog,
  OfferOnchain,
  Brand,
  Commission,
  Articles,
  Faq,
  Category,
  About,
  CategoryCommission,
  Countries,
  TransferLog,
  UserTransfer,
  Tax,
  TaxDetail,
  Promo,
  PromoLimit,
  PromoDetail,
  Referral,
  ReferralLog,
  Subscriber,
  Vendor,
  ClientLog,
  Tag,
  TagDetail,
  Banner,
  LoginLog,
  CustomerCare,
  CategoryAbout,
  PromoLog,
  VendorCategory,
  Role,
  Permission,
  UserRole,
  RolePermisson,
  NotificationDetail,
  NotificationMaster,
  NotificationType,
  AddressBook,
  UserWallet,
  News,
  Kyc,
  KycTemplates,
  GlobalConfig,
} from './database/entities';

config();

const configService = new ConfigService();

export default new DataSource({
  type: (process.env.TYPEORM_CONNECTION || 'mysql') as any,
  host: process.env.TYPEORM_HOST || 'localhost',
  port: parseInt(process.env.TYPEORM_PORT) || 3306,
  username: process.env.TYPEORM_USERNAME || 'root',
  password: process.env.TYPEORM_PASSWORD || '123456a@A',
  database: process.env.TYPEORM_DATABASE || 'x_wallet',
  entities: ["src/database/entities/*.entity.ts"],
  migrations: [
    'src/database/migrations/*.ts',
    'dist/database/migrations/*{.ts,.js}',
  ],
  synchronize: false,
});
