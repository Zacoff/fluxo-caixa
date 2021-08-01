import { MigrationInterface, QueryRunner } from 'typeorm'

export class CreateEntities1627843831085 implements MigrationInterface {
    name = 'CreateEntities1627843831085'

    public async up (queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('CREATE TABLE `users` (`id` varchar(255) NOT NULL, `name` varchar(225) NOT NULL, `email` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, `admin` tinyint NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB')
      await queryRunner.query('CREATE TABLE `expenses` (`id` varchar(255) NOT NULL, `userId` varchar(255) NOT NULL, `description` varchar(225) NOT NULL, `value` float NOT NULL, `createdAt` varchar(8) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB')
      await queryRunner.query('CREATE TABLE `revenues` (`id` varchar(255) NOT NULL, `userId` varchar(255) NOT NULL, `description` varchar(225) NOT NULL, `value` float NOT NULL, `createdAt` varchar(8) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB')
      await queryRunner.query('ALTER TABLE `expenses` ADD CONSTRAINT `FK_3d211de716f0f14ea7a8a4b1f2c` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION')
      await queryRunner.query('ALTER TABLE `revenues` ADD CONSTRAINT `FK_ce7e6f779e984069294ad9bb303` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION')
    }

    public async down (queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('ALTER TABLE `revenues` DROP FOREIGN KEY `FK_ce7e6f779e984069294ad9bb303`')
      await queryRunner.query('ALTER TABLE `expenses` DROP FOREIGN KEY `FK_3d211de716f0f14ea7a8a4b1f2c`')
      await queryRunner.query('DROP TABLE `revenues`')
      await queryRunner.query('DROP TABLE `expenses`')
      await queryRunner.query('DROP TABLE `users`')
    }
}
