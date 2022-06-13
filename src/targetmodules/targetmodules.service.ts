import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TargetmodulesService {
  constructor(private prisma: PrismaService) {}

  findAll(projectId: number) {
    return this.prisma.targetModule.findMany({
      where: { repository: { projectId } },
      orderBy: { module: 'asc' },
    });
  }
}
