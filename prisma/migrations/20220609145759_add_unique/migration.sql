/*
  Warnings:

  - Added the required column `projectId` to the `ComponentIdentifierType` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ComponentIdentifierType" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "projectId" INTEGER NOT NULL,
    CONSTRAINT "ComponentIdentifierType_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_ComponentIdentifierType" ("createdAt", "description", "id", "name") SELECT "createdAt", "description", "id", "name" FROM "ComponentIdentifierType";
DROP TABLE "ComponentIdentifierType";
ALTER TABLE "new_ComponentIdentifierType" RENAME TO "ComponentIdentifierType";
CREATE UNIQUE INDEX "ComponentIdentifierType_name_projectId_key" ON "ComponentIdentifierType"("name", "projectId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
