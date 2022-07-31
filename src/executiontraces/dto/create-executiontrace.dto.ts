import { IsArray } from 'class-validator';

export class CreateExecutiontraceDto {
  @IsArray()
  traces: {
    timestamp: number;
    scenarioId: number;
    mappingRuleId: number;
    sourceIdentifierValues: string;
    targetIdentifierValues: string;
    logOrigin: string;
  }[];
}
