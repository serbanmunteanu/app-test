-- CreateTable
CREATE TABLE `DisposableEmail` (
    `email` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `DisposableEmail_email_key`(`email`),
    PRIMARY KEY (`email`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `StopWord` (
    `word` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `StopWord_word_key`(`word`),
    PRIMARY KEY (`word`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
