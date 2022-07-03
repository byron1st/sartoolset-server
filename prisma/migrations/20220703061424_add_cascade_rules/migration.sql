-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_TargetComponentIdentifierTypesOnMappingRules" (
    "mappingRuleId" INTEGER NOT NULL,
    "componentIdentifierTypeId" INTEGER NOT NULL,

    PRIMARY KEY ("mappingRuleId", "componentIdentifierTypeId"),
    CONSTRAINT "TargetComponentIdentifierTypesOnMappingRules_componentIdentifierTypeId_fkey" FOREIGN KEY ("componentIdentifierTypeId") REFERENCES "ComponentIdentifierType" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "TargetComponentIdentifierTypesOnMappingRules_mappingRuleId_fkey" FOREIGN KEY ("mappingRuleId") REFERENCES "MappingRule" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_TargetComponentIdentifierTypesOnMappingRules" ("componentIdentifierTypeId", "mappingRuleId") SELECT "componentIdentifierTypeId", "mappingRuleId" FROM "TargetComponentIdentifierTypesOnMappingRules";
DROP TABLE "TargetComponentIdentifierTypesOnMappingRules";
ALTER TABLE "new_TargetComponentIdentifierTypesOnMappingRules" RENAME TO "TargetComponentIdentifierTypesOnMappingRules";
CREATE TABLE "new_SourceComponentIdentifierTypesOnMappingRules" (
    "mappingRuleId" INTEGER NOT NULL,
    "componentIdentifierTypeId" INTEGER NOT NULL,

    PRIMARY KEY ("mappingRuleId", "componentIdentifierTypeId"),
    CONSTRAINT "SourceComponentIdentifierTypesOnMappingRules_componentIdentifierTypeId_fkey" FOREIGN KEY ("componentIdentifierTypeId") REFERENCES "ComponentIdentifierType" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "SourceComponentIdentifierTypesOnMappingRules_mappingRuleId_fkey" FOREIGN KEY ("mappingRuleId") REFERENCES "MappingRule" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_SourceComponentIdentifierTypesOnMappingRules" ("componentIdentifierTypeId", "mappingRuleId") SELECT "componentIdentifierTypeId", "mappingRuleId" FROM "SourceComponentIdentifierTypesOnMappingRules";
DROP TABLE "SourceComponentIdentifierTypesOnMappingRules";
ALTER TABLE "new_SourceComponentIdentifierTypesOnMappingRules" RENAME TO "SourceComponentIdentifierTypesOnMappingRules";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
