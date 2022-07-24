import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateScenarioDto {
  @IsInt()
  projectId: number;

  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;
}
