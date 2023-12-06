import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { TodosService } from "../service/todos.service";
import { Id } from "../todos.interfaces";

@Controller("/todos")
export class TodosController {
  constructor(private todoService: TodosService) {
  }

  @Get()
  async getAll() {
    return await this.todoService.getAll();
  }

  @Post()
  async addTodo(
    @Body("parentsId") parentsId: Id[],
    @Body("parent") parent: Id) {
    return await this.todoService.addTodo(parentsId, parent);
  }

  @Get(":id")
  async getOne(@Param("id") id: Id) {
    return await this.todoService.getTodoById(id);
  }

  @Delete(":id")
  async removeTodo(@Param("id") id: Id) {
    return await this.todoService.removeTodo(id);
  }

  @Delete(":id/tasks")
  async removeTask(@Param("id") id: Id, @Query("taskIndex") taskIndex: number) {
    return await this.todoService.removeTask(id, taskIndex);
  }

  @Put(":id/tasks")
  async addTask(@Param("id") id: Id, @Body("task") task: string) {
    return await this.todoService.addTask(id, task);
  }

}