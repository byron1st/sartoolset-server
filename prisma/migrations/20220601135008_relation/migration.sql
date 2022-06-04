-- CreateTable
CREATE TABLE "Relation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Source" TEXT NOT NULL,
    "Target" TEXT NOT NULL,
    "Location" TEXT NOT NULL,
    "repositoryId" INTEGER NOT NULL,
    CONSTRAINT "Relation_repositoryId_fkey" FOREIGN KEY ("repositoryId") REFERENCES "Repository" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
