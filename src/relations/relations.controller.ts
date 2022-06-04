import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  BadRequestException,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { RelationsService } from './relations.service';
import { CreateRelationDto } from './dto/create-relation.dto';
import { DeleteRelationsDto } from './dto/delete-relations.dto';

@Controller('relations')
export class RelationsController {
  constructor(private readonly relationsService: RelationsService) {}

  @Post()
  create(@Body() createRelationDto: CreateRelationDto) {
    if (
      !createRelationDto.relations ||
      createRelationDto.relations.length == 0
    ) {
      throw new BadRequestException();
    }

    return this.relationsService.create(createRelationDto);
  }

  @Get()
  findAll(@Query('repositoryId', ParseIntPipe) repositoryId: number) {
    return this.relationsService.findAll(repositoryId);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.relationsService.findOne(id);
  }

  @Delete()
  removeAll(@Body() deleteRelationsDto: DeleteRelationsDto) {
    return this.relationsService.removeAll(deleteRelationsDto.repositoryId);
  }
}
