import { IsNotEmpty } from 'class-validator';

export class FindAllRepositoriesQuery {
  @IsNotEmpty()
  projectId: number;
}
