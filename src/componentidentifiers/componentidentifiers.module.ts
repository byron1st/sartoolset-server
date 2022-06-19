import { Module } from '@nestjs/common';
import { ComponentidentifiersService } from './componentidentifiers.service';
import { ComponentidentifiersController } from './componentidentifiers.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ComponentidentifiersController],
  providers: [ComponentidentifiersService, PrismaService],
})
export class ComponentidentifiersModule {}
