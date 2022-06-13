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
        sourceModules: { include: { dependencyRelations: true } },
        targetModules: true,
      },
    });

    return repositories.map((repository) => ({
      ...repository,
      relations: repository.sourceModules
        ? repository.sourceModules.reduce((relationsCount, source) => {
            relationsCount += source.dependencyRelations.length;
            return relationsCount;
          }, 0)
        : 0,
      sources: repository.sourceModules.length,
      targets: repository.targetModules.length,
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
