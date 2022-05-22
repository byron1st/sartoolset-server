import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ProjectsController } from 'src/projects/projects.controller';
import { ProjectsService } from 'src/projects/projects.service';

@Module({
  controllers: [ProjectsController],
  providers: [ProjectsService, PrismaService],
})
export class ProjectsModule {}
