import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import {Id, Task} from "../interfaces/todos.interfaces";

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: Id;

  @Column("text", { array: true })
  tasks: Task[];

  @Column("integer", { array: true })
  parentsId: Id[];

  @Column("integer", { array: true })
  childrenId: Id[];
}
