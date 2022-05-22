import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

@Injectable()
export class ProjectsService {
  constructor(private prisma: PrismaService) {}

  create({ name }: CreateProjectDto) {
    return this.prisma.project.create({ data: { name } });
  }

  findAll() {
    return this.prisma.project.findMany({ orderBy: { createdAt: 'desc' } });
  }

  findOne(id: number) {
    return this.prisma.project.findUnique({ where: { id } });
  }

  update(id: number, { name }: UpdateProjectDto) {
    return this.prisma.project.update({ where: { id }, data: { name } });
  }

  remove(id: number) {
    return this.prisma.project.delete({ where: { id } });
  }
}
