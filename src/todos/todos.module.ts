import { Module } from "@nestjs/common";
import { TodosController } from "./controllers/todos.controller";
import { TodosService } from "./service/todos.service";


@Module({
  controllers: [TodosController, TodosController],
  providers: [TodosService, TodosService],
})
export class TodosModule {}