import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { ComponentidentifiersService } from './componentidentifiers.service';
import { UpdateComponentidentifierDto } from './dto/update-componentidentifier.dto';

@Controller('componentidentifiers')
export class ComponentidentifiersController {
  constructor(
    private readonly componentidentifiersService: ComponentidentifiersService,
  ) {}

  @Get()
  findAll(@Query('projectId', ParseIntPipe) projectId: number) {
    return this.componentidentifiersService.findAll(projectId);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateComponentidentifierDto: UpdateComponentidentifierDto,
  ) {
    return this.componentidentifiersService.update(
      +id,
      updateComponentidentifierDto,
    );
  }
}
