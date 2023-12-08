import { Id } from "../interfaces/todos.interfaces";
import { IsArray, IsNumber, IsOptional, IsString } from "class-validator";

export class AddTodoDto {
  @IsNumber()
  parentId: Id;

  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  parentsId: Id[];
}

export class IdTodoDto {
  @IsNumber()
  id: Id;
}

export class AddTaskDto {
  @IsString()
  task: string;
}

export class TaskIndexDto {
  @IsNumber()
  id: Id;
}