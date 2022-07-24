-- CreateTable
CREATE TABLE "ExecutionScenario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "description" TEXT
);

-- CreateTable
CREATE TABLE "ExecutionTrace" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "recordedAt" DATETIME NOT NULL,
    "sourceIdentifierValues" TEXT NOT NULL,
    "targetIdentifierValues" TEXT NOT NULL,
    "mappingRuleId" INTEGER NOT NULL,
    "executionScenarioId" INTEGER NOT NULL,
    CONSTRAINT "ExecutionTrace_mappingRuleId_fkey" FOREIGN KEY ("mappingRuleId") REFERENCES "MappingRule" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "ExecutionTrace_executionScenarioId_fkey" FOREIGN KEY ("executionScenarioId") REFERENCES "ExecutionScenario" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
