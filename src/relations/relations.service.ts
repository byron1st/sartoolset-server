import { Injectable } from '@nestjs/common';
import { Relation, Repository } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateRelationDto } from './dto/create-relation.dto';

@Injectable()
export class RelationsService {
  constructor(private prisma: PrismaService) {}

  create({ relations, repositoryId }: CreateRelationDto) {
    return this.prisma.$transaction(
      relations.map((relation) =>
        this.prisma.relation.create({
          data: {
            source: relation.sourceModule,
            target: `${relation.targetModule}${
              relation.targetFunc ? `.${relation.targetFunc}` : ''
            }`,
            location: relation.sourceLocation,
            repository: {
              connect: { id: repositoryId },
            },
          },
        }),
      ),
    );
  }

  async findAll(projectId: number, sort: string) {
    const repositories = await this.prisma.repository.findMany({
      where: { projectId },
      include: { relations: true },
    });

    return repositories
      .reduce(
        (relations: (Relation & { repository: Repository })[], repository) => {
          relations.push(
            ...repository.relations.map((relation) => ({
              ...relation,
              repository: { ...repository, relations: undefined },
            })),
          );

          return relations;
        },
        [],
      )
      .sort((a, b) => {
        switch (sort) {
          case 'source':
            return sortBySource(a, b);
          case 'target':
            return sortByTarget(a, b);
          case 'language':
            return sortByLanguage(a, b);
          default:
            return 0;
        }
      });
  }

  findOne(id: number) {
    return this.prisma.relation.findUnique({ where: { id } });
  }

  removeAll(repositoryId: number) {
    return this.prisma.relation.deleteMany({ where: { repositoryId } });
  }
}

function sortBySource(a: Relation, b: Relation): number {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  if (a.source > b.source) {
    return 1;
  }
  return -1;
}

function sortByTarget(a: Relation, b: Relation): number {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  if (a.target > b.target) {
    return 1;
  }
  return -1;
}

function sortByLanguage(
  a: Relation & { repository: Repository },
  b: Relation & { repository: Repository },
): number {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  if (a.repository.language > b.repository.language) {
    return 1;
  }
  return -1;
}
