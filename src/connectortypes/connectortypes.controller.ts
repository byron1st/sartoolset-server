import { Controller, Get, ParseIntPipe, Query } from '@nestjs/common';
import { ConnectortypesService } from './connectortypes.service';

@Controller('connectortypes')
export class ConnectortypesController {
  constructor(private readonly connectortypesService: ConnectortypesService) {}

  @Get()
  findAll(@Query('projectId', ParseIntPipe) projectId: number) {
    return this.connectortypesService.findAll(projectId);
  }
}
