import { Module } from "@nestjs/common";
import { TodosController } from "./controllers/todos.controller";
import { TodosService } from "./service/todos.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Todo } from "./todos.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Todo])],
  controllers: [TodosController],
  providers: [TodosService],
})
export class TodosModule {}