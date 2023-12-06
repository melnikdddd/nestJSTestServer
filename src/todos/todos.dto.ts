import { Id, Tasks } from './todos.interfaces';
import { IsArray, IsNumber, IsString } from 'class-validator';

export class TodosDto {
  @IsNumber()
  id: Id;

  @IsArray()
  @IsString({ each: true })
  tasks: Tasks;

  @IsArray()
  @IsNumber()
  parentsId: Id[];
}


