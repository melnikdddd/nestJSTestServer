import { Module } from "@nestjs/common";
import { TodosController } from "./controllers/todos.controller";
import { TodosService } from "./service/todos.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Todo } from "./db/todos.entity";


@Module({
  imports: [TypeOrmModule.forFeature([Todo])],
  controllers: [TodosController, TodosController],
  providers: [TodosService, TodosService],
})
export class TodosModule {}