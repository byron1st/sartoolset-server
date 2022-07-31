import { PartialType } from '@nestjs/mapped-types';
import { CreateExecutiontraceDto } from './create-executiontrace.dto';

export class UpdateExecutiontraceDto extends PartialType(CreateExecutiontraceDto) {}
