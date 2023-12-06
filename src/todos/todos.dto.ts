import { Id } from './todos.interfaces';
import { IsNumber } from 'class-validator';

export class TodosIdDto {
  @IsNumber()
  id: Id;
}

