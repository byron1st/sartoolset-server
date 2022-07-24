import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateScenarioDto } from './dto/create-scenario.dto';
import { UpdateScenarioDto } from './dto/update-scenario.dto';

@Injectable()
export class ScenariosService {
  constructor(private prisma: PrismaService) {}

  create({ name, description, projectId }: CreateScenarioDto) {
    return this.prisma.executionScenario.create({
      data: {
        name,
        description,
        project: {
          connect: { id: projectId },
        },
      },
    });
  }

  findAll(projectId: number) {
    return this.prisma.executionScenario.findMany({
      where: { projectId },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} scenario`;
  }

  update(id: number, { name, description }: UpdateScenarioDto) {
    return this.prisma.executionScenario.update({
      where: { id },
      data: { name, description },
    });
  }

  remove(id: number) {
    return this.prisma.executionScenario.delete({ where: { id } });
  }
}
