import { IsString } from 'class-validator';

export class UpdateComponentidentifierDto {
  @IsString()
  name: string;

  @IsString()
  description?: string;
}
