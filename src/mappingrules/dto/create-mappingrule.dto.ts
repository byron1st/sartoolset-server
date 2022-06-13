import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateMappingruleDto {
  @IsNumber()
  projectId: number;

  @IsNotEmpty()
  connectorType: string;

  @IsNotEmpty()
  procedureCondition: string;

  memoryConditions: string[];

  @IsString({ each: true })
  sourceIdentifierTypes: string[];

  @IsString({ each: true })
  targetIdentifierTypes: string[];
}
