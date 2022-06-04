import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
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

  async findAll(projectId: number) {
    const repositories = await this.prisma.repository.findMany({
      where: { projectId },
      include: {
        relations: true,
      },
    });

    return repositories.map((repository) => ({
      ...repository,
      relations: repository.relations ? repository.relations.length : 0,
    }));
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
