import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';

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
