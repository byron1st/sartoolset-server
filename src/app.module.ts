import { Module } from '@nestjs/common';
import { ProjectsModule } from './projects/projects.module';
import { RepositoriesModule } from './repositories/repositories.module';
import { RelationsModule } from './relations/relations.module';
import { MappingrulesModule } from './mappingrules/mappingrules.module';
import { ConnectortypesModule } from './connectortypes/connectortypes.module';
import { TargetmodulesModule } from './targetmodules/targetmodules.module';
import { ComponentidentifiersModule } from './componentidentifiers/componentidentifiers.module';
import { ScenariosModule } from './scenarios/scenarios.module';
import { ExecutiontracesModule } from './executiontraces/executiontraces.module';

@Module({
  imports: [
    ProjectsModule,
    RepositoriesModule,
    RelationsModule,
    MappingrulesModule,
    ConnectortypesModule,
    TargetmodulesModule,
    ComponentidentifiersModule,
    ScenariosModule,
    ExecutiontracesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
