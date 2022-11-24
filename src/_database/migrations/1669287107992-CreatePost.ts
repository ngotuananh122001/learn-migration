import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatePost1669287107992 implements MigrationInterface {
    name = 'CreatePost1669287107992'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`post_entity\` (\`id\` int NOT NULL, \`title\` varchar(255) NOT NULL, \`content\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`post_entity\``);
    }

}
