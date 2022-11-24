import { MigrationInterface, QueryRunner } from "typeorm";

export class migrations1669290484694 implements MigrationInterface {
    name = 'migrations1669290484694'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`mail_job\` CHANGE \`retry_count\` \`retry_count\` tinyint(4) NULL DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`mail_job\` CHANGE \`retry_count\` \`retry_count\` tinyint NULL DEFAULT '0'`);
    }

}
