-- CreateTable
CREATE TABLE "ConnectorType" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "projectId" INTEGER NOT NULL,
    CONSTRAINT "ConnectorType_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ComponentIdentifierType" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "description" TEXT
);

-- CreateTable
CREATE TABLE "MappingRule" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "connectorTypeId" INTEGER NOT NULL,
    "procedureCondition" TEXT NOT NULL,
    CONSTRAINT "MappingRule_connectorTypeId_fkey" FOREIGN KEY ("connectorTypeId") REFERENCES "ConnectorType" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "MemoryCondition" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "mappingRuleId" INTEGER NOT NULL,
    CONSTRAINT "MemoryCondition_mappingRuleId_fkey" FOREIGN KEY ("mappingRuleId") REFERENCES "MappingRule" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "SourceComponentIdentifierTypesOnMappingRules" (
    "mappingRuleId" INTEGER NOT NULL,
    "componentIdentifierTypeId" INTEGER NOT NULL,

    PRIMARY KEY ("mappingRuleId", "componentIdentifierTypeId"),
    CONSTRAINT "SourceComponentIdentifierTypesOnMappingRules_componentIdentifierTypeId_fkey" FOREIGN KEY ("componentIdentifierTypeId") REFERENCES "ComponentIdentifierType" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "SourceComponentIdentifierTypesOnMappingRules_mappingRuleId_fkey" FOREIGN KEY ("mappingRuleId") REFERENCES "MappingRule" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "TargetComponentIdentifierTypesOnMappingRules" (
    "mappingRuleId" INTEGER NOT NULL,
    "componentIdentifierTypeId" INTEGER NOT NULL,

    PRIMARY KEY ("mappingRuleId", "componentIdentifierTypeId"),
    CONSTRAINT "TargetComponentIdentifierTypesOnMappingRules_componentIdentifierTypeId_fkey" FOREIGN KEY ("componentIdentifierTypeId") REFERENCES "ComponentIdentifierType" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "TargetComponentIdentifierTypesOnMappingRules_mappingRuleId_fkey" FOREIGN KEY ("mappingRuleId") REFERENCES "MappingRule" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "ConnectorType_name_projectId_key" ON "ConnectorType"("name", "projectId");
