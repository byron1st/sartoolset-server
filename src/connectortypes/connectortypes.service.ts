import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ConnectortypesService {
  constructor(private prisma: PrismaService) {}

  findAll(projectId: number) {
    return this.prisma.connectorType.findMany({
      where: { projectId },
      orderBy: { name: 'asc' },
    });
  }
}
