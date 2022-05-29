import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { RepositoriesService } from './repositories.service';
import { CreateRepositoryDto } from './dto/create-repository.dto';
import { UpdateRepositoryDto } from './dto/update-repository.dto';
import { FindAllRepositoriesQuery } from 'src/repositories/dto/findall-repositories.query';

@Controller('repositories')
export class RepositoriesController {
  constructor(private readonly repositoriesService: RepositoriesService) {}

  @Post()
  create(@Body() createRepositoryDto: CreateRepositoryDto) {
    return this.repositoriesService.create(createRepositoryDto);
  }

  @Get()
  findAll(@Query() findAllRepositoriesQuery: FindAllRepositoriesQuery) {
    return this.repositoriesService.findAll(findAllRepositoriesQuery);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.repositoriesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateRepositoryDto: UpdateRepositoryDto,
  ) {
    return this.repositoriesService.update(id, updateRepositoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.repositoriesService.remove(id);
  }
}
