import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateEntities1627420002414 implements MigrationInterface {
    name = 'CreateEntities1627420002414'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `users` (`id` varchar(255) NOT NULL, `name` varchar(225) NOT NULL, `email` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `expenses` (`id` int NOT NULL AUTO_INCREMENT, `description` varchar(225) NOT NULL, `value` float NOT NULL, `createdAt` varchar(8) NOT NULL, `usersId` varchar(255) NULL, UNIQUE INDEX `REL_2597bc3fcddde3207c6a62566a` (`usersId`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `revenues` (`id` int NOT NULL AUTO_INCREMENT, `description` varchar(225) NOT NULL, `value` float NOT NULL, `createdAt` varchar(8) NOT NULL, `usersId` varchar(255) NULL, UNIQUE INDEX `REL_2929da307143d998040f4a3993` (`usersId`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `expenses` ADD CONSTRAINT `FK_2597bc3fcddde3207c6a62566a6` FOREIGN KEY (`usersId`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `revenues` ADD CONSTRAINT `FK_2929da307143d998040f4a3993e` FOREIGN KEY (`usersId`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `revenues` DROP FOREIGN KEY `FK_2929da307143d998040f4a3993e`");
        await queryRunner.query("ALTER TABLE `expenses` DROP FOREIGN KEY `FK_2597bc3fcddde3207c6a62566a6`");
        await queryRunner.query("DROP INDEX `REL_2929da307143d998040f4a3993` ON `revenues`");
        await queryRunner.query("DROP TABLE `revenues`");
        await queryRunner.query("DROP INDEX `REL_2597bc3fcddde3207c6a62566a` ON `expenses`");
        await queryRunner.query("DROP TABLE `expenses`");
        await queryRunner.query("DROP TABLE `users`");
    }

}
