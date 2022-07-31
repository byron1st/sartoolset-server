import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateExecutiontraceDto } from './dto/create-executiontrace.dto';
import { UpdateExecutiontraceDto } from './dto/update-executiontrace.dto';

@Injectable()
export class ExecutiontracesService {
  constructor(private prisma: PrismaService) {}

  create(createExecutiontraceDto: CreateExecutiontraceDto) {
    return this.prisma.$transaction(
      createExecutiontraceDto.traces.map((trace) =>
        this.prisma.executionTrace.create({
          data: {
            recordedAt: new Date(trace.timestamp),
            sourceIdentifierValues: trace.sourceIdentifierValues,
            targetIdentifierValues: trace.targetIdentifierValues,
            logOrigin: trace.logOrigin,

            executionScenario: { connect: { id: trace.scenarioId } },
            mappingRule: { connect: { id: trace.mappingRuleId } },
          },
        }),
      ),
    );
  }

  findAll() {
    return `This action returns all executiontraces`;
  }

  findOne(id: number) {
    return `This action returns a #${id} executiontrace`;
  }

  update(id: number, updateExecutiontraceDto: UpdateExecutiontraceDto) {
    return `This action updates a #${id} executiontrace`;
  }

  remove(id: number) {
    return `This action removes a #${id} executiontrace`;
  }
}
