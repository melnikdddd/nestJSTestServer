import {TypeOrmModuleOptions} from "@nestjs/typeorm";

const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB
}