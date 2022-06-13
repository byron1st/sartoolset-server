import { Module } from '@nestjs/common';
import { MappingrulesService } from './mappingrules.service';
import { MappingrulesController } from './mappingrules.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [MappingrulesController],
  providers: [MappingrulesService, PrismaService],
})
export class MappingrulesModule {}
