import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateMappingruleDto } from './dto/create-mappingrule.dto';
import { UpdateMappingruleDto } from './dto/update-mappingrule.dto';

@Injectable()
export class MappingrulesService {
  constructor(private prisma: PrismaService) {}

  create({
    projectId,
    connectorType,
    procedureConditionID,
    memoryConditions,
    sourceIdentifierTypes,
    targetIdentifierTypes,
  }: CreateMappingruleDto) {
    return this.prisma.mappingRule.create({
      data: {
        connectorType: {
          connectOrCreate: {
            where: {
              name_projectId: { name: connectorType, projectId },
            },
            create: {
              name: connectorType,
              project: { connect: { id: projectId } },
            },
          },
        },
        procedureCondition: {
          connect: { id: procedureConditionID },
        },
        memoryConditions: {
          create: memoryConditions.map((condition) => ({ condition })),
        },
        sourceComponentIdentifierTypesOnMappingRules: {
          create: sourceIdentifierTypes.map((sourceIdentifierType) => ({
            componentIdentifierType: {
              connectOrCreate: {
                where: {
                  name_projectId: { name: sourceIdentifierType, projectId },
                },
                create: {
                  name: sourceIdentifierType,
                  project: { connect: { id: projectId } },
                },
              },
            },
          })),
        },
        targetComponentIdentifierTypesOnMappingRules: {
          create: targetIdentifierTypes.map((targetIdentifierType) => ({
            componentIdentifierType: {
              connectOrCreate: {
                where: {
                  name_projectId: { name: targetIdentifierType, projectId },
                },
                create: {
                  name: targetIdentifierType,
                  project: { connect: { id: projectId } },
                },
              },
            },
          })),
        },
      },
    });
  }

  findAll(projectId: number) {
    return this.prisma.mappingRule.findMany({
      where: { connectorType: { projectId } },
      orderBy: [
        { connectorType: { name: 'asc' } },
        { procedureCondition: { module: 'asc' } },
      ],
      include: {
        connectorType: true,
        procedureCondition: { include: { repository: true } },
        memoryConditions: true,
        sourceComponentIdentifierTypesOnMappingRules: {
          include: { componentIdentifierType: true },
        },
        targetComponentIdentifierTypesOnMappingRules: {
          include: { componentIdentifierType: true },
        },
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} mappingrule`;
  }

  update(id: number, updateMappingruleDto: UpdateMappingruleDto) {
    return `This action updates a #${id} mappingrule`;
  }

  remove(id: number) {
    return `This action removes a #${id} mappingrule`;
  }
}
