import { Controller, Delete, Get, Param, Put } from '@nestjs/common';
import { TodosService } from '../service/todos.service';

@Controller('/todos')
export class TodosController {
  constructor(private todoService: TodosService) {
  }

  @Get()
  getAll(){

  }

  @Get(":id")
  getOne(@Param("id") id: number) {
  }

  @Put(":id")
  addTask(@Param("id") id: number, @Body('task') task: string) {

  }

  @Delete(":id")
  removeTodo(@Param("id") id: number) {

  }

}


