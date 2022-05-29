import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { FindAllRepositoriesQuery } from 'src/repositories/dto/findall-repositories.query';
import { CreateRepositoryDto } from './dto/create-repository.dto';
import { UpdateRepositoryDto } from './dto/update-repository.dto';

@Injectable()
export class RepositoriesService {
  constructor(private prisma: PrismaService) {}

  create({ language, path, projectId }: CreateRepositoryDto) {
    return this.prisma.repository.create({
      data: {
        language,
        path,
        project: {
          connect: { id: projectId },
        },
      },
    });
  }

  findAll({ projectId }: FindAllRepositoriesQuery) {
    return this.prisma.repository.findMany({
      where: { projectId },
    });
  }

  findOne(id: number) {
    return this.prisma.repository.findUnique({ where: { id } });
  }

  update(id: number, { path, language }: UpdateRepositoryDto) {
    return this.prisma.repository.update({
      where: { id },
      data: { path, language },
    });
  }

  remove(id: number) {
    return this.prisma.repository.delete({ where: { id } });
  }
}
