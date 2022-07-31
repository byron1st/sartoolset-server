import { Module } from '@nestjs/common';
import { ExecutiontracesService } from './executiontraces.service';
import { ExecutiontracesController } from './executiontraces.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ExecutiontracesController],
  providers: [ExecutiontracesService, PrismaService],
})
export class ExecutiontracesModule {}
