import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { Todo } from "./src/todos/todos.entity";

dotenv.config();

const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  database: 'Todos',
  entities: [Todo],
  password: process.env.DB_PASSWORD,
  synchronize: true,
  autoLoadEntities: true,
};

export default typeOrmConfig;
