import { MigrationInterface, QueryRunner } from "typeorm";

export class Final1669288231158 implements MigrationInterface {
    name = 'Final1669288231158'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`username\` varchar(80) NULL, \`email\` varchar(191) NOT NULL, \`password\` varchar(255) NOT NULL DEFAULT '', \`avatar_url\` varchar(255) NULL, \`first_name\` varchar(100) NULL, \`last_name\` varchar(100) NULL, \`date_of_birth\` date NULL, \`phone\` varchar(15) NULL, \`created_at\` bigint NULL, \`updated_at\` bigint NULL, \`is_active_2fa\` tinyint(1) NOT NULL DEFAULT '0', \`is_active_email_code\` tinyint(1) NOT NULL DEFAULT '0', \`two_factor_authentication_secret\` varchar(255) NULL, \`email_code\` varchar(255) NULL, \`is_active_kyc\` tinyint(1) NOT NULL DEFAULT '0', \`wallet\` varchar(255) NULL, \`status\` varchar(25) NULL DEFAULT 'request', \`type\` varchar(25) NULL, \`token\` varchar(255) NULL, \`email_code_active\` varchar(255) NULL, \`group\` bigint NOT NULL DEFAULT '0', \`data\` text NULL, \`country_id\` int NULL, \`is_vendor\` tinyint NULL, \`vendor_name\` varchar(255) NULL, \`referral_name\` varchar(255) NULL, \`vendor_id\` int NULL, \`created_by\` varchar(80) NULL, \`updated_by\` varchar(80) NULL, INDEX \`type\` (\`type\`), INDEX \`status\` (\`status\`), UNIQUE INDEX \`wallet\` (\`wallet\`), UNIQUE INDEX \`username\` (\`username\`), UNIQUE INDEX \`email\` (\`email\`), UNIQUE INDEX \`IDX_78a916df40e02a9deb1c4b75ed\` (\`username\`), UNIQUE INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` (\`email\`), UNIQUE INDEX \`IDX_5f6f511ea673346697a431de82\` (\`wallet\`), UNIQUE INDEX \`IDX_7cfb51de5f22b0df09dcb42e62\` (\`vendor_name\`), UNIQUE INDEX \`IDX_adecf0843a8a7c00ec771fbd95\` (\`referral_name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_adecf0843a8a7c00ec771fbd95\` ON \`user\``);
        await queryRunner.query(`DROP INDEX \`IDX_7cfb51de5f22b0df09dcb42e62\` ON \`user\``);
        await queryRunner.query(`DROP INDEX \`IDX_5f6f511ea673346697a431de82\` ON \`user\``);
        await queryRunner.query(`DROP INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` ON \`user\``);
        await queryRunner.query(`DROP INDEX \`IDX_78a916df40e02a9deb1c4b75ed\` ON \`user\``);
        await queryRunner.query(`DROP INDEX \`email\` ON \`user\``);
        await queryRunner.query(`DROP INDEX \`username\` ON \`user\``);
        await queryRunner.query(`DROP INDEX \`wallet\` ON \`user\``);
        await queryRunner.query(`DROP INDEX \`status\` ON \`user\``);
        await queryRunner.query(`DROP INDEX \`type\` ON \`user\``);
        await queryRunner.query(`DROP TABLE \`user\``);
    }

}
