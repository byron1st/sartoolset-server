import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ExecutiontracesService } from './executiontraces.service';
import { CreateExecutiontraceDto } from './dto/create-executiontrace.dto';
import { UpdateExecutiontraceDto } from './dto/update-executiontrace.dto';

@Controller('executiontraces')
export class ExecutiontracesController {
  constructor(
    private readonly executiontracesService: ExecutiontracesService,
  ) {}

  @Post()
  create(@Body() createExecutiontraceDto: CreateExecutiontraceDto) {
    return this.executiontracesService.create(createExecutiontraceDto);
  }

  @Get()
  findAll() {
    return this.executiontracesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.executiontracesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateExecutiontraceDto: UpdateExecutiontraceDto,
  ) {
    return this.executiontracesService.update(+id, updateExecutiontraceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.executiontracesService.remove(+id);
  }
}
