import { PartialType } from '@nestjs/mapped-types';
import { CreateMappingruleDto } from './create-mappingrule.dto';

export class UpdateMappingruleDto extends PartialType(CreateMappingruleDto) {}
