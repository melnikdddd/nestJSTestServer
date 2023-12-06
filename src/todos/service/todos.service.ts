import { Injectable } from "@nestjs/common";
import { InjectRepository} from "@nestjs/typeorm";
import { TodoRepository } from "../db/todo.repository";
import { Todo } from "../db/todos.entity";
import { Id } from "../todos.interfaces";

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(TodoRepository)
    private readonly todoRepository: TodoRepository,
  ) {}
  async getAll(): Promise<Todo[]> {
    return this.todoRepository.getAllTodos();
  }
  async getTodoById(id: Id): Promise<Todo | null> {
    return this.todoRepository.getTodoById(id);
  }
  async addTodo(parentsId: Id[], parent: Id): Promise<Todo | null> {
    const parents = [...parentsId, parent];
    return this.todoRepository.addTodo(parents);
  }
  async removeTodo(id: Id): Promise<boolean> {
    return this.todoRepository.removeTodo(id);
  }
  async addTask(todoId: Id, task: string): Promise<Todo> {
    return this.todoRepository.addTask(todoId, task);
  }
  async removeTask(todoId: Id, taskIndex: number): Promise<Todo> {
    return this.todoRepository.removeTask(todoId, taskIndex);
  }
}