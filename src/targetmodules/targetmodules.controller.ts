import { Controller, Get, ParseIntPipe, Query } from '@nestjs/common';
import { TargetmodulesService } from './targetmodules.service';

@Controller('targetmodules')
export class TargetmodulesController {
  constructor(private readonly targetmodulesService: TargetmodulesService) {}

  @Get()
  findAll(@Query('projectId', ParseIntPipe) projectId: number) {
    return this.targetmodulesService.findAll(projectId);
  }
}
