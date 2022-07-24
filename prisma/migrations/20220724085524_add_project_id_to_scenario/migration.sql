/*
  Warnings:

  - Added the required column `projectId` to the `ExecutionScenario` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ExecutionScenario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "projectId" INTEGER NOT NULL,
    CONSTRAINT "ExecutionScenario_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_ExecutionScenario" ("createdAt", "description", "id", "name") SELECT "createdAt", "description", "id", "name" FROM "ExecutionScenario";
DROP TABLE "ExecutionScenario";
ALTER TABLE "new_ExecutionScenario" RENAME TO "ExecutionScenario";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
