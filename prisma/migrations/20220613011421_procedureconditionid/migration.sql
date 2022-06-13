/*
  Warnings:

  - You are about to drop the column `procedureCondition` on the `MappingRule` table. All the data in the column will be lost.
  - Added the required column `procedureConditionId` to the `MappingRule` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_MappingRule" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "connectorTypeId" INTEGER NOT NULL,
    "procedureConditionId" INTEGER NOT NULL,
    CONSTRAINT "MappingRule_procedureConditionId_fkey" FOREIGN KEY ("procedureConditionId") REFERENCES "TargetModule" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "MappingRule_connectorTypeId_fkey" FOREIGN KEY ("connectorTypeId") REFERENCES "ConnectorType" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_MappingRule" ("connectorTypeId", "createdAt", "id") SELECT "connectorTypeId", "createdAt", "id" FROM "MappingRule";
DROP TABLE "MappingRule";
ALTER TABLE "new_MappingRule" RENAME TO "MappingRule";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
