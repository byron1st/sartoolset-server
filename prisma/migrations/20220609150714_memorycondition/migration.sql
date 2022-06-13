/*
  Warnings:

  - Added the required column `condition` to the `MemoryCondition` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_MemoryCondition" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "condition" TEXT NOT NULL,
    "mappingRuleId" INTEGER NOT NULL,
    CONSTRAINT "MemoryCondition_mappingRuleId_fkey" FOREIGN KEY ("mappingRuleId") REFERENCES "MappingRule" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_MemoryCondition" ("createdAt", "id", "mappingRuleId") SELECT "createdAt", "id", "mappingRuleId" FROM "MemoryCondition";
DROP TABLE "MemoryCondition";
ALTER TABLE "new_MemoryCondition" RENAME TO "MemoryCondition";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
