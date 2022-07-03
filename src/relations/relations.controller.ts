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
  ParseEnumPipe,
} from '@nestjs/common';
import { RelationsService } from './relations.service';
import { CreateRelationDto } from './dto/create-relation.dto';
import { DeleteRelationsDto } from './dto/delete-relations.dto';
import { Sort } from 'src/relations/enum/sort.enum';
import { Direction } from 'src/relations/enum/direction.enum';

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
  findAll(
    @Query('projectId', ParseIntPipe) projectId: number,
    @Query('sort', new ParseEnumPipe(Sort)) sort: Sort,
    @Query('direction', new ParseEnumPipe(Direction)) dir: Direction,
    @Query('skip', ParseIntPipe) skip: number,
    @Query('take', ParseIntPipe) take: number,
    @Query('searchTerm') searchTerm: string,
    @Query('searchTarget') searchTarget: string,
  ) {
    return this.relationsService.findAll(
      projectId,
      sort,
      dir,
      skip,
      take,
      searchTerm,
      searchTarget,
    );
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
