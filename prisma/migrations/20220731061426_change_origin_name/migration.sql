/*
  Warnings:

  - You are about to drop the column `origin` on the `ExecutionTrace` table. All the data in the column will be lost.
  - Added the required column `logOrigin` to the `ExecutionTrace` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ExecutionTrace" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "recordedAt" DATETIME NOT NULL,
    "sourceIdentifierValues" TEXT NOT NULL,
    "targetIdentifierValues" TEXT NOT NULL,
    "logOrigin" TEXT NOT NULL,
    "mappingRuleId" INTEGER NOT NULL,
    "executionScenarioId" INTEGER NOT NULL,
    CONSTRAINT "ExecutionTrace_mappingRuleId_fkey" FOREIGN KEY ("mappingRuleId") REFERENCES "MappingRule" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "ExecutionTrace_executionScenarioId_fkey" FOREIGN KEY ("executionScenarioId") REFERENCES "ExecutionScenario" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_ExecutionTrace" ("createdAt", "executionScenarioId", "id", "mappingRuleId", "recordedAt", "sourceIdentifierValues", "targetIdentifierValues") SELECT "createdAt", "executionScenarioId", "id", "mappingRuleId", "recordedAt", "sourceIdentifierValues", "targetIdentifierValues" FROM "ExecutionTrace";
DROP TABLE "ExecutionTrace";
ALTER TABLE "new_ExecutionTrace" RENAME TO "ExecutionTrace";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
