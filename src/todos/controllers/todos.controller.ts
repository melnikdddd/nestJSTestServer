import {Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, ValidationPipe} from "@nestjs/common";
import {TodosService} from "../service/todos.service";
import {Id, Task} from "../interfaces/todos.interfaces";
import {AddTodoDto, IdTodoDto, AddTaskDto, TaskIndexDto} from "../dto/todos.dto";

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
        @Body(new ValidationPipe({transform: true})) AddTodoDto: AddTodoDto,
        @Body("parentsId") parentsId: Id[],
        @Body("parentId") parentId: Id) {
        console.log(parentId);
        return await this.todoService.addTodo(parentsId, parentId);
    }

    @Get(":id")
    async getOne(
        @Param(new ValidationPipe({transform: true})) IdTodoDto: IdTodoDto,
        @Param("id") id: Id) {
        return await this.todoService.getTodoById(id);
    }

    @Delete(":id")
    async removeTodo(
        @Param('id', ParseIntPipe) id: Id,
        @Query('parentId', ParseIntPipe) parentId: Id) {

        return await this.todoService.removeTodo(id, parentId);
    }

    @Delete(":id/tasks")
    async removeTask(
        @Param(('id'), ParseIntPipe) id: Id,
        @Query(('taskIndex'), ParseIntPipe) taskIndex: number){
        return await this.todoService.removeTask(id, taskIndex);
    }

    @Post(":id/tasks")
    async addTask(
        @Param(('id'), ParseIntPipe) idTodoDto: Id,
        @Body(new ValidationPipe({transform: true})) TodoTasksDto: AddTaskDto,
        @Param("id") id: Id, @Body("task") task: Task) {
        return await this.todoService.addTask(id, task);
    }
}