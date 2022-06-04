import { Injectable } from '@nestjs/common';
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
            target: `${relation.targetModule}.${relation.targetFunc}`,
            location: relation.sourceLocation,
            repository: {
              connect: { id: repositoryId },
            },
          },
        }),
      ),
    );
  }

  findAll(repositoryId: number) {
    return this.prisma.relation.findMany({ where: { repositoryId } });
  }

  findOne(id: number) {
    return this.prisma.relation.findUnique({ where: { id } });
  }

  removeAll(repositoryId: number) {
    return this.prisma.relation.deleteMany({ where: { repositoryId } });
  }
}
