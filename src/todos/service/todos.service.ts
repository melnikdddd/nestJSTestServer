import { Injectable } from "@nestjs/common";
import { InjectRepository} from "@nestjs/typeorm";
import { Todo } from "../todos.entity";
import { Id } from "../todos.interfaces";
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
  async addTodo(parentsId: Id[], parent: Id): Promise<Todo | null> {
    const parents = parentsId.concat(parent);
    const newTodo = this.todoRepository.create({
      tasks: [],
      parentsId: parents,
    });
    return this.todoRepository.save(newTodo);
  }
  async removeTodo(id: Id): Promise<boolean> {
    try {
      await this.todoRepository
        .createQueryBuilder()
        .delete()
        .from(Todo)
        .where(':id = ANY(parentsId)', { id })
        .execute();
      await this.todoRepository.delete({ id: id });
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
  async addTask(todoId: Id, task: string): Promise<Todo> {
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