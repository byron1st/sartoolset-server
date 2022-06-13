/*
  Warnings:

  - You are about to drop the `Relation` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Relation";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "SourceModule" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "module" TEXT NOT NULL,
    "repositoryId" INTEGER NOT NULL,
    CONSTRAINT "SourceModule_repositoryId_fkey" FOREIGN KEY ("repositoryId") REFERENCES "Repository" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "TargetModule" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "module" TEXT NOT NULL,
    "repositoryId" INTEGER NOT NULL,
    CONSTRAINT "TargetModule_repositoryId_fkey" FOREIGN KEY ("repositoryId") REFERENCES "Repository" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "DependencyRelation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "location" TEXT NOT NULL,
    "sourceId" INTEGER NOT NULL,
    "targetId" INTEGER NOT NULL,
    CONSTRAINT "DependencyRelation_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "SourceModule" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "DependencyRelation_targetId_fkey" FOREIGN KEY ("targetId") REFERENCES "TargetModule" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "SourceModule_module_key" ON "SourceModule"("module");

-- CreateIndex
CREATE UNIQUE INDEX "TargetModule_module_key" ON "TargetModule"("module");
