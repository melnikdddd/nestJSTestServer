import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as process from 'process';

const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
};

export default typeOrmConfig;
