import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UpdateComponentidentifierDto } from './dto/update-componentidentifier.dto';

@Injectable()
export class ComponentidentifiersService {
  constructor(private prisma: PrismaService) {}

  findAll(projectId: number) {
    return this.prisma.componentIdentifierType.findMany({
      where: { projectId },
      orderBy: { name: 'asc' },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} componentidentifier`;
  }

  update(
    id: number,
    updateComponentidentifierDto: UpdateComponentidentifierDto,
  ) {
    return `This action updates a #${id} componentidentifier`;
  }
}
