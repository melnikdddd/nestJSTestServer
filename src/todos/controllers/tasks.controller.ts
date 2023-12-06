import { Controller, Delete, Param, Put } from "@nestjs/common";

@Controller("/todos/:id/task")
export class TasksController {
  @Put()
  updateTask(@Param('index') index: number){

  }

  @Delete()
  removeTask(@Param('index')index: number){

  }
}