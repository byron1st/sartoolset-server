import { Module } from '@nestjs/common';
import { ConnectortypesService } from './connectortypes.service';
import { ConnectortypesController } from './connectortypes.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ConnectortypesController],
  providers: [ConnectortypesService, PrismaService],
})
export class ConnectortypesModule {}
