import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MappingrulesService } from './mappingrules.service';
import { CreateMappingruleDto } from './dto/create-mappingrule.dto';
import { UpdateMappingruleDto } from './dto/update-mappingrule.dto';

@Controller('mappingrules')
export class MappingrulesController {
  constructor(private readonly mappingrulesService: MappingrulesService) {}

  @Post()
  create(@Body() createMappingruleDto: CreateMappingruleDto) {
    return this.mappingrulesService.create(createMappingruleDto);
  }

  @Get()
  findAll() {
    return this.mappingrulesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mappingrulesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMappingruleDto: UpdateMappingruleDto,
  ) {
    return this.mappingrulesService.update(+id, updateMappingruleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mappingrulesService.remove(+id);
  }
}
