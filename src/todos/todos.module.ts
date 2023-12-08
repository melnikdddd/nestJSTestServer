import { Module } from "@nestjs/common";
import { TodosController } from "./todos.controller";
import { TodosService } from "./service/todos.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Todo } from "./service/todos.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Todo])],
  controllers: [TodosController],
  providers: [TodosService],
})
export class TodosModule {}