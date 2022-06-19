import { PartialType } from '@nestjs/mapped-types';
import { CreateComponentidentifierDto } from './create-componentidentifier.dto';

export class UpdateComponentidentifierDto extends PartialType(
  CreateComponentidentifierDto,
) {}
