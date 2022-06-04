import { Module } from '@nestjs/common';
import { ProjectsModule } from './projects/projects.module';
import { RepositoriesModule } from './repositories/repositories.module';
import { RelationsModule } from './relations/relations.module';

@Module({
  imports: [ProjectsModule, RepositoriesModule, RelationsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
