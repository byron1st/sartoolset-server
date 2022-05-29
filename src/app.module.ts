import { Module } from '@nestjs/common';
import { ProjectsModule } from './projects/projects.module';
import { RepositoriesModule } from './repositories/repositories.module';

@Module({
  imports: [ProjectsModule, RepositoriesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
