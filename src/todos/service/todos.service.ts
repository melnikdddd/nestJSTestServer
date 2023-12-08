import { Injectable } from "@nestjs/common";
import { InjectRepository} from "@nestjs/typeorm";
import { Todo } from "./todos.entity";
import {Id, Task} from "../interfaces/todos.interfaces";
import { Repository } from "typeorm";

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>,
  ) {}
  async getAll(): Promise<Todo[]> {
    return this.todoRepository.find();
  }

  async getTodoById(id: Id): Promise<Todo | null> {
    return this.todoRepository.findOneBy({ id: id });
  }
  async addTodo(parentsId: Id[], parentId: Id): Promise<Todo | null> {
    const parents = parentsId.concat(parentId);
    const newTodo = this.todoRepository.create({
      tasks: [],
      parentsId: parents,
      childrenId: [],
    });
    const savedTodo = await this.todoRepository.save(newTodo);
    const parentElement = await this.todoRepository.findOneBy({ id: parentId });
    if (!parentElement) return savedTodo;
    parentElement.childrenId.push(savedTodo.id);
    await this.todoRepository.save(parentElement);
    return savedTodo;
  }
  async removeTodo(id: Id, parentId: Id): Promise<boolean> {
    try {
      await this.todoRepository
        .createQueryBuilder()
        .delete()
        .from(Todo)
        .where(':id = ANY(parentsId)', { id })
        .execute();
      await this.todoRepository.delete({ id: id });
      const parent = await this.todoRepository.findOneBy({id: parentId});
      parent.childrenId = parent.childrenId.filter(childId => childId !== id);
      await this.todoRepository.save(parent);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
  async addTask(todoId: Id, task: Task): Promise<Todo> {
    const todo = await this.todoRepository.findOneBy({ id: todoId });
    if (!todo) {
      return null;
    }
    todo.tasks.push(task);
    return await this.todoRepository.save(todo);
  }
  async removeTask(todoId: Id, taskIndex: number): Promise<Todo> {
    const todo = await this.todoRepository.findOneBy({ id: todoId });
    if (!todo) {
      return null;
    }
    todo.tasks.splice(taskIndex, 1);
    return await this.todoRepository.save(todo);
  }
}