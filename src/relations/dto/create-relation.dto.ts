// const a = {
//   language: 'Go',
//   targetModule: 'github.com/gin-gonic/gin',
//   targetFunc: 'Param',
//   sourceModule:
//     'gitlab.com/bigpicturelabs/trust-chain-services/apps/api_gateway/server',
//   sourceLocation:
//     '/Users/byron1st/Workspace/research/references/trust-chain-services/apps/api_gateway/server/router.go:212',
// };

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
