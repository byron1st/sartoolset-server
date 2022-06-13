import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Direction } from 'src/relations/enum/direction.enum';
import { Sort } from 'src/relations/enum/sort.enum';
import { CreateRelationDto } from './dto/create-relation.dto';

@Injectable()
export class RelationsService {
  constructor(private prisma: PrismaService) {}

  create({ relations, repositoryId }: CreateRelationDto) {
    return this.prisma.$transaction(
      relations.map((relation) => {
        const targetModule = `${relation.targetModule}${
          relation.targetFunc ? `.${relation.targetFunc}` : ''
        }`;

        return this.prisma.dependencyRelation.create({
          data: {
            location: relation.sourceLocation,
            source: {
              connectOrCreate: {
                where: { module: relation.sourceModule },
                create: {
                  module: relation.sourceModule,
                  repository: { connect: { id: repositoryId } },
                },
              },
            },
            target: {
              connectOrCreate: {
                where: { module: targetModule },
                create: {
                  module: targetModule,
                  repository: { connect: { id: repositoryId } },
                },
              },
            },
          },
        });
      }),
    );
  }

  async findAll(
    projectId: number,
    sort: Sort,
    dir: Direction,
    skip: number,
    take: number,
  ) {
    const orderByDirection = dir === Direction.DESC ? 'desc' : 'asc'; // Default orderBy direction is asc

    const relations = await this.prisma.dependencyRelation.findMany({
      where: { source: { repository: { projectId } } },
      orderBy:
        sort === Sort.LANGUAGE
          ? { location: orderByDirection }
          : sort === Sort.TARGET
          ? { target: { module: orderByDirection } }
          : { source: { module: orderByDirection } }, // Default orderBy is source
      include: { source: { include: { repository: true } }, target: true },
      skip,
      take,
    });

    const totalCounts = await this.prisma.dependencyRelation.count({
      where: { source: { repository: { projectId } } },
    });

    return { relations, totalCounts };
  }

  findOne(id: number) {
    return this.prisma.dependencyRelation.findUnique({ where: { id } });
  }

  removeAll(repositoryId: number) {
    return this.prisma.dependencyRelation.deleteMany({
      where: {
        OR: [{ source: { repositoryId } }, { target: { repositoryId } }],
      },
    });
  }
}
