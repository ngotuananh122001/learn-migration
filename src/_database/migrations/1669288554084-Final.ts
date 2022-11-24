import { MigrationInterface, QueryRunner } from "typeorm";

export class Final1669288554084 implements MigrationInterface {
    name = 'Final1669288554084'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`address\` (\`id\` int NOT NULL AUTO_INCREMENT, \`address\` varchar(150) NOT NULL, \`secret\` text NOT NULL, \`note\` varchar(150) NOT NULL, \`created_at\` bigint NULL, \`updated_at\` bigint NULL, UNIQUE INDEX \`IDX_0a1ed89729fa10ba8b81b99f30\` (\`address\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`currency_config\` (\`swap_id\` int NOT NULL, \`network\` varchar(255) NOT NULL, \`chain_name\` varchar(255) NULL, \`chain_id\` varchar(255) NULL, \`average_block_time\` int NOT NULL, \`required_confirmations\` int NOT NULL, \`temp_required_confirmations\` int NOT NULL, \`token_address\` varchar(1000) NULL, \`rpc_endpoint\` varchar(255) NULL, \`explorer_endpoint\` varchar(255) NULL, \`created_at\` bigint NULL, \`updated_at\` bigint NULL, PRIMARY KEY (\`swap_id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`kms_cmk\` (\`id\` varchar(191) NOT NULL, \`region\` varchar(255) NOT NULL, \`alias\` varchar(255) NULL DEFAULT '', \`arn\` varchar(255) NOT NULL, \`is_enabled\` tinyint(1) NOT NULL DEFAULT '0', \`created_at\` bigint NULL, \`updated_at\` bigint NULL, INDEX \`region\` (\`region\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`kms_data_key\` (\`id\` bigint UNSIGNED NOT NULL AUTO_INCREMENT, \`cmk_id\` varchar(255) NOT NULL, \`encrypted_data_key\` varchar(500) NOT NULL, \`is_enabled\` tinyint(1) NOT NULL DEFAULT 1, \`created_at\` bigint NULL, \`updated_at\` bigint NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`transaction\` (\`id\` int UNSIGNED NOT NULL AUTO_INCREMENT, \`txid\` varchar(255) NULL, \`ref_transaction_id\` int UNSIGNED NULL, \`currency\` varchar(200) NOT NULL, \`type\` varchar(20) NOT NULL, \`from_address\` varchar(255) NOT NULL, \`contract_address\` varchar(255) NOT NULL, \`data\` varchar(10000) NOT NULL, \`error_message\` varchar(5000) NULL, \`status\` varchar(50) NOT NULL, \`unsigned_txid\` varchar(100) NULL, \`block_number\` bigint NULL, \`block_hash\` varchar(100) NULL, \`block_timestamp\` bigint NULL, \`fee_amount\` decimal(40,8) NULL, \`unsigned_raw\` text NULL, \`signed_raw\` text NULL, \`retry_timestamp\` bigint NULL DEFAULT 1, \`created_at\` bigint NULL, \`updated_at\` bigint NULL, INDEX \`updated_at\` (\`updated_at\`), INDEX \`retry_timestamp\` (\`retry_timestamp\`), INDEX \`type\` (\`type\`), INDEX \`status\` (\`status\`), INDEX \`unsigned_txid\` (\`unsigned_txid\`), INDEX \`contract_address\` (\`from_address\`), INDEX \`from_address\` (\`contract_address\`), INDEX \`ref_transaction_id\` (\`ref_transaction_id\`), INDEX \`txid\` (\`txid\`), INDEX \`created_at\` (\`created_at\`), INDEX \`block_timestamp\` (\`block_timestamp\`), INDEX \`block_number\` (\`block_number\`), INDEX \`block_hash\` (\`block_hash\`), UNIQUE INDEX \`tx_index\` (\`currency\`, \`txid\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`mail_job\` (\`id\` bigint UNSIGNED NOT NULL AUTO_INCREMENT, \`sender_name\` varchar(100) NULL, \`sender_address\` varchar(100) NOT NULL, \`recipient_address\` varchar(100) NOT NULL, \`title\` varchar(254) NULL, \`template_name\` varchar(50) NOT NULL, \`content\` text NULL, \`is_sent\` tinyint(1) NULL DEFAULT '0', \`retry_count\` tinyint(4) NULL DEFAULT '0', \`created_at\` bigint NULL, \`updated_at\` bigint NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`mail_log\` (\`id\` bigint UNSIGNED NOT NULL AUTO_INCREMENT, \`job_id\` int NOT NULL, \`status\` varchar(255) NULL, \`msg\` text NULL, \`created_at\` bigint NULL, INDEX \`job_id\` (\`job_id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`username\` varchar(80) NULL, \`email\` varchar(191) NOT NULL, \`password\` varchar(255) NOT NULL DEFAULT '', \`avatar_url\` varchar(255) NULL, \`first_name\` varchar(100) NULL, \`last_name\` varchar(100) NULL, \`date_of_birth\` date NULL, \`phone\` varchar(15) NULL, \`created_at\` bigint NULL, \`updated_at\` bigint NULL, \`is_active_2fa\` tinyint(1) NOT NULL DEFAULT '0', \`is_active_email_code\` tinyint(1) NOT NULL DEFAULT '0', \`two_factor_authentication_secret\` varchar(255) NULL, \`email_code\` varchar(255) NULL, \`is_active_kyc\` tinyint(1) NOT NULL DEFAULT '0', \`wallet\` varchar(255) NULL, \`status\` varchar(25) NULL DEFAULT 'request', \`type\` varchar(25) NULL, \`token\` varchar(255) NULL, \`email_code_active\` varchar(255) NULL, \`group\` bigint NOT NULL DEFAULT '0', \`data\` text NULL, \`country_id\` int NULL, \`is_vendor\` tinyint NULL, \`vendor_name\` varchar(255) NULL, \`referral_name\` varchar(255) NULL, \`vendor_id\` int NULL, \`created_by\` varchar(80) NULL, \`updated_by\` varchar(80) NULL, INDEX \`type\` (\`type\`), INDEX \`status\` (\`status\`), UNIQUE INDEX \`wallet\` (\`wallet\`), UNIQUE INDEX \`username\` (\`username\`), UNIQUE INDEX \`email\` (\`email\`), UNIQUE INDEX \`IDX_78a916df40e02a9deb1c4b75ed\` (\`username\`), UNIQUE INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` (\`email\`), UNIQUE INDEX \`IDX_5f6f511ea673346697a431de82\` (\`wallet\`), UNIQUE INDEX \`IDX_7cfb51de5f22b0df09dcb42e62\` (\`vendor_name\`), UNIQUE INDEX \`IDX_adecf0843a8a7c00ec771fbd95\` (\`referral_name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`admin\` (\`id\` int NOT NULL AUTO_INCREMENT, \`username\` varchar(80) NOT NULL, \`email\` varchar(191) NOT NULL, \`password\` varchar(255) NOT NULL, \`avatar_url\` varchar(255) NULL, \`full_name\` varchar(100) NULL, \`created_at\` bigint NULL, \`updated_at\` bigint NULL, \`is_active\` tinyint(1) NOT NULL DEFAULT '1', \`is_active_2fa\` tinyint(1) NOT NULL DEFAULT '0', \`two_factor_authentication_secret\` varchar(255) NULL, \`status\` varchar(25) NULL DEFAULT 'request', \`group\` bigint NULL DEFAULT '0', \`token\` varchar(255) NULL, \`data\` text NULL, \`vendor_id\` int NULL, \`is_delete\` tinyint(1) NOT NULL DEFAULT '0', \`created_by\` varchar(80) NULL, \`updated_by\` varchar(80) NULL, UNIQUE INDEX \`IDX_5e568e001f9d1b91f67815c580\` (\`username\`), UNIQUE INDEX \`IDX_de87485f6489f5d0995f584195\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`latest_block\` (\`currency\` varchar(255) NOT NULL, \`block_number\` int NOT NULL, \`created_at\` bigint NOT NULL, \`updated_at\` bigint NOT NULL, PRIMARY KEY (\`currency\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`config\` (\`id\` int NOT NULL AUTO_INCREMENT, \`key\` varchar(255) NOT NULL, \`value\` decimal(40,8) NULL, \`created_at\` bigint NULL, \`updated_at\` bigint NULL, UNIQUE INDEX \`IDX_26489c99ddbb4c91631ef5cc79\` (\`key\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`meta_data\` (\`id\` bigint NOT NULL, \`collection_id\` int NOT NULL, \`collection_name\` varchar(255) NOT NULL, \`name\` varchar(60) NOT NULL, \`slug\` varchar(60) NOT NULL, \`image_url\` text NOT NULL, \`description\` text NULL, \`note\` text NULL, \`type\` varchar(25) NULL, \`is_sync_image\` tinyint(1) NOT NULL DEFAULT '0', \`image_type\` varchar(25) NULL, \`data\` text NULL, \`properties\` text NULL, \`created_at\` bigint NOT NULL, \`updated_at\` bigint NOT NULL, \`count_view\` int NULL, \`files\` text NULL, \`attributes\` text NULL, INDEX \`collection_id\` (\`collection_id\`), INDEX \`type\` (\`type\`), INDEX \`slug\` (\`slug\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`collection\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`slug\` varchar(255) NOT NULL, \`image_url\` text NOT NULL, \`description\` text NULL, \`payment_token\` varchar(20) NOT NULL, \`status\` varchar(25) NULL, \`type\` varchar(25) NULL, \`data\` text NULL, \`brand_id\` int NULL, \`category_id\` int NULL, \`created_by\` varchar(80) NULL, \`updated_by\` varchar(80) NULL, \`is_deleted\` tinyint(1) NULL DEFAULT 0, \`created_at\` bigint NOT NULL, \`updated_at\` bigint NOT NULL, INDEX \`type\` (\`type\`), INDEX \`status\` (\`status\`), INDEX \`slug\` (\`slug\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`nft_onchain\` (\`id\` int NOT NULL AUTO_INCREMENT, \`contract_address\` varchar(255) NOT NULL, \`token_id\` varchar(255) NOT NULL, \`token_uri\` varchar(255) NOT NULL, \`owner\` varchar(50) NULL, \`human_owner\` varchar(50) NULL, \`meta_data\` varchar(5000) NULL, \`block_timestamp\` bigint NULL, \`status\` varchar(50) NULL, \`edition\` int NULL, \`create_by\` varchar(50) NULL, \`created_at\` bigint NOT NULL, \`updated_at\` bigint NOT NULL, INDEX \`status\` (\`status\`), INDEX \`block_timestamp\` (\`block_timestamp\`), INDEX \`human_owner\` (\`human_owner\`), INDEX \`owner\` (\`owner\`), INDEX \`token_uri\` (\`token_uri\`), INDEX \`token_id\` (\`token_id\`), INDEX \`contract_address\` (\`contract_address\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`order_onchain\` (\`id\` int NOT NULL AUTO_INCREMENT, \`contract_address\` varchar(255) NOT NULL, \`order_id\` int NOT NULL, \`owner\` varchar(255) NOT NULL, \`token_address\` varchar(255) NULL, \`token_id\` varchar(255) NOT NULL, \`price\` varchar(255) NOT NULL, \`price_convert\` decimal(10,4) NULL, \`payment_token\` varchar(255) NOT NULL, \`is_onsale\` tinyint(1) NOT NULL DEFAULT 1, \`block_timestamp\` bigint NULL, \`status\` varchar(50) NULL, \`exp_time\` bigint NOT NULL, \`created_at\` bigint NOT NULL, \`updated_at\` bigint NOT NULL, INDEX \`status\` (\`status\`), INDEX \`block_timestamp\` (\`block_timestamp\`), INDEX \`is_onsale\` (\`is_onsale\`), INDEX \`payment_token\` (\`payment_token\`), INDEX \`price\` (\`price\`), INDEX \`token_id\` (\`token_id\`), INDEX \`token_address\` (\`token_address\`), INDEX \`owner\` (\`owner\`), INDEX \`order_id\` (\`order_id\`), INDEX \`contract_address\` (\`contract_address\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`order_log\` (\`id\` int NOT NULL AUTO_INCREMENT, \`contract_address\` varchar(255) NOT NULL, \`order_id\` int NOT NULL, \`action\` varchar(50) NULL, \`token_address\` varchar(255) NOT NULL, \`token_id\` varchar(255) NOT NULL, \`price\` varchar(255) NOT NULL, \`price_convert\` decimal(10,4) NULL, \`price_commission\` varchar(255) NOT NULL DEFAULT '0', \`payment_token\` varchar(255) NOT NULL, \`txid\` varchar(255) NULL, \`block_number\` bigint NULL, \`block_hash\` varchar(100) NULL, \`block_timestamp\` bigint NULL, \`status\` varchar(50) NULL, \`created_at\` bigint NOT NULL, \`updated_at\` bigint NOT NULL, INDEX \`status\` (\`status\`), INDEX \`block_timestamp\` (\`block_timestamp\`), INDEX \`block_hash\` (\`block_hash\`), INDEX \`block_number\` (\`block_number\`), INDEX \`txid\` (\`txid\`), INDEX \`payment_token\` (\`payment_token\`), INDEX \`price_commission\` (\`price_commission\`), INDEX \`price\` (\`price\`), INDEX \`token_id\` (\`token_id\`), INDEX \`token_address\` (\`token_address\`), INDEX \`action\` (\`action\`), INDEX \`order_id\` (\`order_id\`), INDEX \`contract_address\` (\`contract_address\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`nft_log\` (\`id\` int NOT NULL AUTO_INCREMENT, \`contract_address\` varchar(255) NOT NULL, \`token_id\` varchar(255) NOT NULL, \`from\` varchar(50) NULL, \`to\` varchar(50) NULL, \`action\` varchar(50) NULL, \`txid\` varchar(255) NULL, \`block_number\` bigint NULL, \`block_hash\` varchar(100) NULL, \`block_timestamp\` bigint NULL, \`status\` varchar(50) NULL, \`created_at\` bigint NOT NULL, \`updated_at\` bigint NOT NULL, INDEX \`status\` (\`status\`), INDEX \`block_timestamp\` (\`block_timestamp\`), INDEX \`block_hash\` (\`block_hash\`), INDEX \`block_number\` (\`block_number\`), INDEX \`txid\` (\`txid\`), INDEX \`action\` (\`action\`), INDEX \`to\` (\`to\`), INDEX \`from\` (\`from\`), INDEX \`token_id\` (\`token_id\`), INDEX \`contract_address\` (\`contract_address\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`transaction_request\` (\`id\` int NOT NULL AUTO_INCREMENT, \`request_id\` varchar(50) NOT NULL, \`currency\` varchar(200) NOT NULL, \`address\` varchar(255) NOT NULL, \`method\` varchar(255) NOT NULL, \`data\` varchar(10000) NOT NULL, \`status\` varchar(50) NOT NULL, \`ref_transaction_id\` int UNSIGNED NULL, \`created_at\` bigint NULL, \`updated_at\` bigint NULL, INDEX \`updated_at\` (\`updated_at\`), INDEX \`ref_transaction_id\` (\`ref_transaction_id\`), INDEX \`status\` (\`status\`), INDEX \`method\` (\`method\`), INDEX \`address\` (\`address\`), INDEX \`currency\` (\`currency\`), UNIQUE INDEX \`request_id\` (\`request_id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`offer_log\` (\`id\` int NOT NULL AUTO_INCREMENT, \`contract_address\` varchar(255) NOT NULL, \`bid_id\` int NOT NULL, \`action\` varchar(50) NULL, \`token_address\` varchar(255) NOT NULL, \`token_id\` varchar(255) NOT NULL, \`price\` varchar(255) NOT NULL, \`price_convert\` decimal(10,4) NULL, \`payment_token\` varchar(255) NOT NULL, \`txid\` varchar(255) NULL, \`block_number\` bigint NULL, \`block_hash\` varchar(100) NULL, \`block_timestamp\` bigint NULL, \`status\` varchar(50) NULL, \`created_at\` bigint NOT NULL, \`updated_at\` bigint NOT NULL, INDEX \`status\` (\`status\`), INDEX \`block_timestamp\` (\`block_timestamp\`), INDEX \`block_hash\` (\`block_hash\`), INDEX \`block_number\` (\`block_number\`), INDEX \`txid\` (\`txid\`), INDEX \`payment_token\` (\`payment_token\`), INDEX \`price\` (\`price\`), INDEX \`token_id\` (\`token_id\`), INDEX \`token_address\` (\`token_address\`), INDEX \`action\` (\`action\`), INDEX \`bid_id\` (\`bid_id\`), INDEX \`contract_address\` (\`contract_address\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`offer_onchain\` (\`id\` int NOT NULL AUTO_INCREMENT, \`contract_address\` varchar(255) NOT NULL, \`bid_id\` int NOT NULL, \`bidder\` varchar(255) NOT NULL, \`token_address\` varchar(255) NULL, \`token_id\` varchar(255) NOT NULL, \`price\` varchar(255) NOT NULL, \`price_convert\` decimal(10,4) NULL, \`payment_token\` varchar(255) NOT NULL, \`block_timestamp\` bigint NULL, \`is_active\` tinyint(1) NOT NULL DEFAULT 1, \`status\` varchar(50) NULL, \`exp_time\` bigint NOT NULL, \`created_at\` bigint NOT NULL, \`updated_at\` bigint NOT NULL, INDEX \`status\` (\`status\`), INDEX \`block_timestamp\` (\`block_timestamp\`), INDEX \`payment_token\` (\`payment_token\`), INDEX \`price\` (\`price\`), INDEX \`token_id\` (\`token_id\`), INDEX \`token_address\` (\`token_address\`), INDEX \`bidder\` (\`bidder\`), INDEX \`bid_id\` (\`bid_id\`), INDEX \`contract_address\` (\`contract_address\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`brand\` (\`id\` int NOT NULL AUTO_INCREMENT, \`brand_name\` varchar(150) NOT NULL, \`description\` text NOT NULL, \`status\` int NULL DEFAULT '0', \`logo_url\` text NOT NULL, \`logo_type\` varchar(25) NULL, \`avatar\` text NULL, \`avatar_type\` varchar(25) NULL, \`logo_black_url\` text NOT NULL, \`logo_black_type\` varchar(25) NULL, \`description_url\` text NOT NULL, \`description_type\` varchar(25) NULL, \`category_commission_id\` int NOT NULL, \`created_by\` varchar(80) NULL, \`updated_by\` varchar(80) NULL, \`is_deleted\` tinyint(1) NULL DEFAULT 0, \`created_at\` bigint NULL, \`updated_at\` bigint NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`commission\` (\`id\` int NOT NULL AUTO_INCREMENT, \`id_admin\` int NULL, \`name_admin\` text NULL, \`seller_commission\` int NULL, \`buyer_commission\` int NULL, \`status\` tinyint NOT NULL DEFAULT 1, \`category_commission_id\` int NULL, \`brand_id\` int NULL, \`collection_id\` int NULL, \`vendor_id\` int NULL, \`log_id\` int NULL, \`type\` bigint NOT NULL DEFAULT '0', \`created_at\` bigint NULL, \`updated_at\` bigint NULL, \`created_by\` varchar(80) NULL, \`updated_by\` varchar(80) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`articles\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(150) NOT NULL, \`summary\` varchar(500) NOT NULL, \`content\` varchar(10000) NULL, \`category_commission_id\` int NULL, \`status\` int NULL DEFAULT '0', \`view\` int NULL DEFAULT '0', \`image\` text NOT NULL, \`image_type\` varchar(25) NULL, \`created_at\` bigint NULL, \`publish_date\` bigint NULL, \`updated_at\` bigint NULL, \`created_by\` varchar(80) NULL, \`updated_by\` varchar(80) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`faq\` (\`id\` int NOT NULL AUTO_INCREMENT, \`category_id\` int NULL, \`question\` text NULL, \`answer\` text NULL, \`logo_url\` text NOT NULL, \`logo_type\` varchar(25) NULL, \`created_at\` bigint NULL, \`updated_at\` bigint NULL, \`created_by\` varchar(80) NULL, \`updated_by\` varchar(80) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`category\` (\`id\` int NOT NULL AUTO_INCREMENT, \`category_name\` varchar(255) NULL, \`created_at\` bigint NULL, \`updated_at\` bigint NULL, \`created_by\` varchar(80) NULL, \`updated_by\` varchar(80) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`about\` (\`id\` int NOT NULL AUTO_INCREMENT, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`category_commission\` (\`id\` int NOT NULL AUTO_INCREMENT, \`category_name\` varchar(255) NULL, \`category_description\` varchar(255) NULL, \`logo_url\` text NOT NULL, \`logo_type\` varchar(25) NULL, \`description_url\` text NOT NULL, \`description_type\` varchar(25) NULL, \`is_deleted\` tinyint(1) NULL DEFAULT 0, \`created_by\` varchar(80) NULL, \`updated_by\` varchar(80) NULL, \`created_at\` bigint NULL, \`updated_at\` bigint NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`countries\` (\`id\` int NOT NULL AUTO_INCREMENT, \`code\` varchar(150) NOT NULL, \`name\` text NOT NULL, \`created_at\` bigint NULL, \`updated_at\` bigint NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`transfer_log\` (\`id\` int NOT NULL AUTO_INCREMENT, \`contract_address\` varchar(255) NOT NULL, \`action\` varchar(50) NULL, \`from\` varchar(50) NULL, \`to\` varchar(50) NULL, \`price\` varchar(255) NOT NULL, \`txid\` varchar(255) NULL, \`block_number\` bigint NULL, \`block_hash\` varchar(100) NULL, \`created_at\` bigint NOT NULL, \`updated_at\` bigint NOT NULL, INDEX \`block_hash\` (\`block_hash\`), INDEX \`block_number\` (\`block_number\`), INDEX \`txid\` (\`txid\`), INDEX \`to\` (\`to\`), INDEX \`from\` (\`from\`), INDEX \`price\` (\`price\`), INDEX \`action\` (\`action\`), INDEX \`contract_address\` (\`contract_address\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user_transfer\` (\`id\` int NOT NULL AUTO_INCREMENT, \`id_admin\` int NULL, \`name_admin\` text NULL, \`txid\` varchar(255) NULL, \`created_at\` bigint NULL, \`updated_at\` bigint NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`user_transfer\``);
        await queryRunner.query(`DROP INDEX \`contract_address\` ON \`transfer_log\``);
        await queryRunner.query(`DROP INDEX \`action\` ON \`transfer_log\``);
        await queryRunner.query(`DROP INDEX \`price\` ON \`transfer_log\``);
        await queryRunner.query(`DROP INDEX \`from\` ON \`transfer_log\``);
        await queryRunner.query(`DROP INDEX \`to\` ON \`transfer_log\``);
        await queryRunner.query(`DROP INDEX \`txid\` ON \`transfer_log\``);
        await queryRunner.query(`DROP INDEX \`block_number\` ON \`transfer_log\``);
        await queryRunner.query(`DROP INDEX \`block_hash\` ON \`transfer_log\``);
        await queryRunner.query(`DROP TABLE \`transfer_log\``);
        await queryRunner.query(`DROP TABLE \`countries\``);
        await queryRunner.query(`DROP TABLE \`category_commission\``);
        await queryRunner.query(`DROP TABLE \`about\``);
        await queryRunner.query(`DROP TABLE \`category\``);
        await queryRunner.query(`DROP TABLE \`faq\``);
        await queryRunner.query(`DROP TABLE \`articles\``);
        await queryRunner.query(`DROP TABLE \`commission\``);
        await queryRunner.query(`DROP TABLE \`brand\``);
        await queryRunner.query(`DROP INDEX \`contract_address\` ON \`offer_onchain\``);
        await queryRunner.query(`DROP INDEX \`bid_id\` ON \`offer_onchain\``);
        await queryRunner.query(`DROP INDEX \`bidder\` ON \`offer_onchain\``);
        await queryRunner.query(`DROP INDEX \`token_address\` ON \`offer_onchain\``);
        await queryRunner.query(`DROP INDEX \`token_id\` ON \`offer_onchain\``);
        await queryRunner.query(`DROP INDEX \`price\` ON \`offer_onchain\``);
        await queryRunner.query(`DROP INDEX \`payment_token\` ON \`offer_onchain\``);
        await queryRunner.query(`DROP INDEX \`block_timestamp\` ON \`offer_onchain\``);
        await queryRunner.query(`DROP INDEX \`status\` ON \`offer_onchain\``);
        await queryRunner.query(`DROP TABLE \`offer_onchain\``);
        await queryRunner.query(`DROP INDEX \`contract_address\` ON \`offer_log\``);
        await queryRunner.query(`DROP INDEX \`bid_id\` ON \`offer_log\``);
        await queryRunner.query(`DROP INDEX \`action\` ON \`offer_log\``);
        await queryRunner.query(`DROP INDEX \`token_address\` ON \`offer_log\``);
        await queryRunner.query(`DROP INDEX \`token_id\` ON \`offer_log\``);
        await queryRunner.query(`DROP INDEX \`price\` ON \`offer_log\``);
        await queryRunner.query(`DROP INDEX \`payment_token\` ON \`offer_log\``);
        await queryRunner.query(`DROP INDEX \`txid\` ON \`offer_log\``);
        await queryRunner.query(`DROP INDEX \`block_number\` ON \`offer_log\``);
        await queryRunner.query(`DROP INDEX \`block_hash\` ON \`offer_log\``);
        await queryRunner.query(`DROP INDEX \`block_timestamp\` ON \`offer_log\``);
        await queryRunner.query(`DROP INDEX \`status\` ON \`offer_log\``);
        await queryRunner.query(`DROP TABLE \`offer_log\``);
        await queryRunner.query(`DROP INDEX \`request_id\` ON \`transaction_request\``);
        await queryRunner.query(`DROP INDEX \`currency\` ON \`transaction_request\``);
        await queryRunner.query(`DROP INDEX \`address\` ON \`transaction_request\``);
        await queryRunner.query(`DROP INDEX \`method\` ON \`transaction_request\``);
        await queryRunner.query(`DROP INDEX \`status\` ON \`transaction_request\``);
        await queryRunner.query(`DROP INDEX \`ref_transaction_id\` ON \`transaction_request\``);
        await queryRunner.query(`DROP INDEX \`updated_at\` ON \`transaction_request\``);
        await queryRunner.query(`DROP TABLE \`transaction_request\``);
        await queryRunner.query(`DROP INDEX \`contract_address\` ON \`nft_log\``);
        await queryRunner.query(`DROP INDEX \`token_id\` ON \`nft_log\``);
        await queryRunner.query(`DROP INDEX \`from\` ON \`nft_log\``);
        await queryRunner.query(`DROP INDEX \`to\` ON \`nft_log\``);
        await queryRunner.query(`DROP INDEX \`action\` ON \`nft_log\``);
        await queryRunner.query(`DROP INDEX \`txid\` ON \`nft_log\``);
        await queryRunner.query(`DROP INDEX \`block_number\` ON \`nft_log\``);
        await queryRunner.query(`DROP INDEX \`block_hash\` ON \`nft_log\``);
        await queryRunner.query(`DROP INDEX \`block_timestamp\` ON \`nft_log\``);
        await queryRunner.query(`DROP INDEX \`status\` ON \`nft_log\``);
        await queryRunner.query(`DROP TABLE \`nft_log\``);
        await queryRunner.query(`DROP INDEX \`contract_address\` ON \`order_log\``);
        await queryRunner.query(`DROP INDEX \`order_id\` ON \`order_log\``);
        await queryRunner.query(`DROP INDEX \`action\` ON \`order_log\``);
        await queryRunner.query(`DROP INDEX \`token_address\` ON \`order_log\``);
        await queryRunner.query(`DROP INDEX \`token_id\` ON \`order_log\``);
        await queryRunner.query(`DROP INDEX \`price\` ON \`order_log\``);
        await queryRunner.query(`DROP INDEX \`price_commission\` ON \`order_log\``);
        await queryRunner.query(`DROP INDEX \`payment_token\` ON \`order_log\``);
        await queryRunner.query(`DROP INDEX \`txid\` ON \`order_log\``);
        await queryRunner.query(`DROP INDEX \`block_number\` ON \`order_log\``);
        await queryRunner.query(`DROP INDEX \`block_hash\` ON \`order_log\``);
        await queryRunner.query(`DROP INDEX \`block_timestamp\` ON \`order_log\``);
        await queryRunner.query(`DROP INDEX \`status\` ON \`order_log\``);
        await queryRunner.query(`DROP TABLE \`order_log\``);
        await queryRunner.query(`DROP INDEX \`contract_address\` ON \`order_onchain\``);
        await queryRunner.query(`DROP INDEX \`order_id\` ON \`order_onchain\``);
        await queryRunner.query(`DROP INDEX \`owner\` ON \`order_onchain\``);
        await queryRunner.query(`DROP INDEX \`token_address\` ON \`order_onchain\``);
        await queryRunner.query(`DROP INDEX \`token_id\` ON \`order_onchain\``);
        await queryRunner.query(`DROP INDEX \`price\` ON \`order_onchain\``);
        await queryRunner.query(`DROP INDEX \`payment_token\` ON \`order_onchain\``);
        await queryRunner.query(`DROP INDEX \`is_onsale\` ON \`order_onchain\``);
        await queryRunner.query(`DROP INDEX \`block_timestamp\` ON \`order_onchain\``);
        await queryRunner.query(`DROP INDEX \`status\` ON \`order_onchain\``);
        await queryRunner.query(`DROP TABLE \`order_onchain\``);
        await queryRunner.query(`DROP INDEX \`contract_address\` ON \`nft_onchain\``);
        await queryRunner.query(`DROP INDEX \`token_id\` ON \`nft_onchain\``);
        await queryRunner.query(`DROP INDEX \`token_uri\` ON \`nft_onchain\``);
        await queryRunner.query(`DROP INDEX \`owner\` ON \`nft_onchain\``);
        await queryRunner.query(`DROP INDEX \`human_owner\` ON \`nft_onchain\``);
        await queryRunner.query(`DROP INDEX \`block_timestamp\` ON \`nft_onchain\``);
        await queryRunner.query(`DROP INDEX \`status\` ON \`nft_onchain\``);
        await queryRunner.query(`DROP TABLE \`nft_onchain\``);
        await queryRunner.query(`DROP INDEX \`slug\` ON \`collection\``);
        await queryRunner.query(`DROP INDEX \`status\` ON \`collection\``);
        await queryRunner.query(`DROP INDEX \`type\` ON \`collection\``);
        await queryRunner.query(`DROP TABLE \`collection\``);
        await queryRunner.query(`DROP INDEX \`slug\` ON \`meta_data\``);
        await queryRunner.query(`DROP INDEX \`type\` ON \`meta_data\``);
        await queryRunner.query(`DROP INDEX \`collection_id\` ON \`meta_data\``);
        await queryRunner.query(`DROP TABLE \`meta_data\``);
        await queryRunner.query(`DROP INDEX \`IDX_26489c99ddbb4c91631ef5cc79\` ON \`config\``);
        await queryRunner.query(`DROP TABLE \`config\``);
        await queryRunner.query(`DROP TABLE \`latest_block\``);
        await queryRunner.query(`DROP INDEX \`IDX_de87485f6489f5d0995f584195\` ON \`admin\``);
        await queryRunner.query(`DROP INDEX \`IDX_5e568e001f9d1b91f67815c580\` ON \`admin\``);
        await queryRunner.query(`DROP TABLE \`admin\``);
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
        await queryRunner.query(`DROP INDEX \`job_id\` ON \`mail_log\``);
        await queryRunner.query(`DROP TABLE \`mail_log\``);
        await queryRunner.query(`DROP TABLE \`mail_job\``);
        await queryRunner.query(`DROP INDEX \`tx_index\` ON \`transaction\``);
        await queryRunner.query(`DROP INDEX \`block_hash\` ON \`transaction\``);
        await queryRunner.query(`DROP INDEX \`block_number\` ON \`transaction\``);
        await queryRunner.query(`DROP INDEX \`block_timestamp\` ON \`transaction\``);
        await queryRunner.query(`DROP INDEX \`created_at\` ON \`transaction\``);
        await queryRunner.query(`DROP INDEX \`txid\` ON \`transaction\``);
        await queryRunner.query(`DROP INDEX \`ref_transaction_id\` ON \`transaction\``);
        await queryRunner.query(`DROP INDEX \`from_address\` ON \`transaction\``);
        await queryRunner.query(`DROP INDEX \`contract_address\` ON \`transaction\``);
        await queryRunner.query(`DROP INDEX \`unsigned_txid\` ON \`transaction\``);
        await queryRunner.query(`DROP INDEX \`status\` ON \`transaction\``);
        await queryRunner.query(`DROP INDEX \`type\` ON \`transaction\``);
        await queryRunner.query(`DROP INDEX \`retry_timestamp\` ON \`transaction\``);
        await queryRunner.query(`DROP INDEX \`updated_at\` ON \`transaction\``);
        await queryRunner.query(`DROP TABLE \`transaction\``);
        await queryRunner.query(`DROP TABLE \`kms_data_key\``);
        await queryRunner.query(`DROP INDEX \`region\` ON \`kms_cmk\``);
        await queryRunner.query(`DROP TABLE \`kms_cmk\``);
        await queryRunner.query(`DROP TABLE \`currency_config\``);
        await queryRunner.query(`DROP INDEX \`IDX_0a1ed89729fa10ba8b81b99f30\` ON \`address\``);
        await queryRunner.query(`DROP TABLE \`address\``);
    }

}