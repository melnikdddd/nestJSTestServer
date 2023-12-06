import { Module } from '@nestjs/common';
import { TodosModule } from './todos/todos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import typeOrmConfig from '../typeorm.config';

@Module({
  imports: [TodosModule, TypeOrmModule.forRoot(typeOrmConfig)],
})
export class AppModule {}
