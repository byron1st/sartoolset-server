/*
  Warnings:

  - You are about to drop the column `Location` on the `Relation` table. All the data in the column will be lost.
  - You are about to drop the column `Source` on the `Relation` table. All the data in the column will be lost.
  - You are about to drop the column `Target` on the `Relation` table. All the data in the column will be lost.
  - Added the required column `location` to the `Relation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `source` to the `Relation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `target` to the `Relation` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Relation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "source" TEXT NOT NULL,
    "target" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "repositoryId" INTEGER NOT NULL,
    CONSTRAINT "Relation_repositoryId_fkey" FOREIGN KEY ("repositoryId") REFERENCES "Repository" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Relation" ("createdAt", "id", "repositoryId") SELECT "createdAt", "id", "repositoryId" FROM "Relation";
DROP TABLE "Relation";
ALTER TABLE "new_Relation" RENAME TO "Relation";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
