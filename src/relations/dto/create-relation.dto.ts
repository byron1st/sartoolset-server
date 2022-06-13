import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateRelationDto {
  @IsNumber()
  repositoryId: number;

  @IsNotEmpty()
  relations: RelationDto[];
}

interface RelationDto {
  language: string;
  targetModule: string;
  targetFunc: string;
  sourceModule: string;
  sourceLocation: string;
}
