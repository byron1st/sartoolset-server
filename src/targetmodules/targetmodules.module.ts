import { Module } from '@nestjs/common';
import { TargetmodulesService } from './targetmodules.service';
import { TargetmodulesController } from './targetmodules.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [TargetmodulesController],
  providers: [TargetmodulesService, PrismaService],
})
export class TargetmodulesModule {}
