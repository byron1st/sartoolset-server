import { IsIn, IsNotEmpty } from 'class-validator';

export class CreateRepositoryDto {
  @IsNotEmpty()
  path: string;

  @IsIn(['go', 'js', 'java'])
  language: string;

  @IsNotEmpty()
  projectId: number;
}
