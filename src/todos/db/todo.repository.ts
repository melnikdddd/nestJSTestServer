import { Repository } from "typeorm";
import { Todo } from "./todos.entity";
import { Id } from "../todos.interfaces";

export class TodoRepository extends Repository<Todo> {
  async getAllTodos(): Promise<Todo[]> {
    return this.find();
  }
  async getTodoById(id: Id): Promise<Todo | null> {
    return await this.findOneBy({ id: id });
  }
  async addTodo(parentsId: Id[]): Promise<Todo | null> {
    const newTodo = this.create({ tasks: [], parentsId: parentsId });
    return this.save(newTodo);
  }
  async removeTodo(id: Id): Promise<boolean> {
    try {
      await this.createQueryBuilder()
        .delete()
        .from(Todo)
        .where('ARRAY_CONTAINS(parentsId, :id)', { id })
        .execute();
      await this.delete({ id: id });
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
  async addTask(todoId: Id, task: string): Promise<Todo | null> {
    const todo = await this.findOneBy({ id: todoId });
    if (!todo) {
      return null;
    }
    todo.tasks.push(task);
    return await this.save(todo);
  }
  async removeTask(todoId: Id, taskIndex: number): Promise<Todo | null> {
    const todo = await this.findOneBy({ id: todoId });
    if (!todo) {
      return null;
    }
    todo.tasks.splice(taskIndex, 1);
    return await this.save(todo);
  }
}
